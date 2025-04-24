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

// Funcion que me conecta con la BBDD
async function getDBConnection() {
    const connection = await mysql.createConnection({
        //consfig de la DB a la que me quiero conectar
        host: "mysql-2270ced0-proyectos-molones48.b.aivencloud.com",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
    });
    connection.connect();
    return connection;
}

//4. Arrancar el servidor en el puerto
const port = 5001;
server.listen(port, () => {
    console.log("Serever is running on http://localhost:" + port);
});

/* const fakeProjects = [
    {
        name: "Poyectos Molones",
        slogan: "Confía en el proceso",
        repo: "https://www.google.es",
        demo: "https://www.google.es",
        technologies: "HTML, CSS, JS y React",
        desc: "Es un proyecto sobre bases de datos",
        autor: "Laura",
        job: "FullStack",
        image: "https://es.unesco.org/youth/toptips/user/pages/images/home-feature-two_mobile.png",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s",
    },
    {
        name: "Proyectos más molones",
        slogan: "Hoy me siento un poco column-reverse",
        repo: "https://www.google.es",
        demo: "https://www.google.es",
        technologies: "HTML, CSS, JS y React",
        desc: "Es un proyecto sobre las dificultades de programar",
        autor: "Judit",
        job: "FullStack",
        image: "https://assets.asana.biz/m/2729b34d99aa7f91/webimage-article-project-planning-project-design-2x.jpg",
        photo: "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png",
    },
]; */

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
        projectData.name,
        projectData.job,
        projectData.photo,
    ]);
    const idNewAutor = autorResult.insertId;
    
    const projectSql =
        "INSERT INTO project (projectName, slogan, demo, repository, technologies, description, image, fk_autor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const [projectResult] = await connection.query(projectSql, [
        projectData.projectName,
        projectData.slogan,
        projectData.demo,
        projectData.repository,
        projectData.technologies,
        projectData.description,
        projectData.image,
        idNewAutor,
    ]);
    console.log(autorResult);

    connection.end();
    res.status(201).json({
        success: true,
        cardUrl: `http://localhost:5001/detail/${projectResult.insertId}`, // devolverá la url de la página del proyecto nuevo
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

    res.render("projectDetail", { project: result[0] });
});
