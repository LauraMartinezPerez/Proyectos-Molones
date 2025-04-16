
//1. Importar los módulos de NPM que necesito
const express = require("express");
const cors = require ("cors");

const path = require("path");

//2. Crear el servidor
const server = express();

//3. Configurar el servidor
server.use(cors());
/* server.use(express.json({limit: "25mb"})); */

//4. Arrancar el servidor en el puerto
const port = 5001;
server.listen(port, () => {
    console.log("Serever is running on http://localhost:" + port);
})

const fakeProjects = [{
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
  }
  ,
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
  
  }];

//5. Servidor de estaticos
const staticServerPath = "./web/dist"; //difino donde estan los ficheros a servir, la web
server.use(express.static(staticServerPath));





