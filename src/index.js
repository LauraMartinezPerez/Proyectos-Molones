
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

//5. Servidor de estaticos
const staticServerPath = "./web/dist"; //difino donde estan los ficheros a servir, la web
server.use(express.static(staticServerPath));



