//1. Importar los módulos de NPM que necesito
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config();

//2. Crear el servidor
const server = express();

//3. Configurar el servidor
server.use(cors());
server.set("view engine", "ejs");
server.use(express.json({ limit: "10mb" }));
// Publicar CSS
server.use(express.static(path.join(__dirname, "public-css")));
// Publicar imágenes
server.use(express.static(path.join(__dirname, "public-images")));



// Funcion que me conecta con la BBDD
async function getDBConnection() {
    const connection = await mysql.createConnection({
        //consfig de la DB a la que me quiero conectar
        host: "mysql-2270ced0-proyectos-molones48.b.aivencloud.com",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: "defaultdb",
        port: 15753,
    });
    connection.connect();
    return connection;
}

//4. Arrancar el servidor en el puerto
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Serever is running on http://localhost:" + port);
});


//5. Servidor de estaticos
const staticServerPath = "./web/dist"; //difino donde estan los ficheros a servir, la web
server.use(express.static(staticServerPath));

//6. Servidor dinámico - Endpoint
/* server.get("/projects/list", (req, res) => {
    if (fakeProjects.length === 0) {
        res.status(404).json({
            status: "Error",
            message: "No se han encontrado resultados",
        });
    } else {
        res.status(200).json({
            status: "succes",
            result: fakeProjects,
        });
    }
}); */
server.get("/projects/list", async (req, res) => {
    /*
    - conectarme a la DB
    - escribir la query para obtener la info de proyectos/autor (SELECT)
    - ejecutasr las querys
    - finalizar la conexion con la DB
    - devolver el resultado al front
    */
    const connection = await getDBConnection();
    const query =
        "SELECT * FROM project, autor WHERE project.fk_autor = autor.id;";
    const [projectsresult] = await connection.query(query);

    connection.end();

    res.status(200).json({
        success: true,
        result: projectsresult,
    });
});

// ENDPOINTS

server.post("/project/list", async (req, res) => {
    const connection = await getDBConnection();
    const projectData = req.body;

    const autorSql = "INSERT INTO autor (name, job, photo) VALUES (?, ?, ?)";
    const [autorResult] = await connection.query(autorSql, [
        projectData.autor,
        projectData.job,
        projectData.photo,
    ]);
    const idNewAutor = autorResult.insertId; //id del autor que se acaba de añadir

    const projectSql =
        "INSERT INTO project (projectName, slogan, demo, repository, technologies, description, image, fk_autor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const [projectResult] = await connection.query(projectSql, [
        projectData.name,
        projectData.slogan,
        projectData.demo,
        projectData.repo,
        projectData.technologies,
        projectData.desc,
        projectData.image,
        idNewAutor,
    ]);
    console.log(autorResult);
    console.log(projectResult.insertId)

    connection.end();
    res.status(201).json({
        success: true,
        cardURL: `http://localhost:5001/detail/${projectResult.insertId}`, // devolverá la url de la página del proyecto nuevo
    });
});

// motor de plantillas
server.get("/detail/:idProject", async (req, res) => {
    const connection = await getDBConnection();
    const projectId = req.params.idProject;
    const sqlQuery =
        "SELECT * FROM project, autor WHERE project.fk_autor = autor.id AND project.id = ?";
    const [result] = await connection.query(sqlQuery, [projectId]);
    console.log(result);
    connection.end();

    res.render("projectDetail", { ...result[0] });
});
