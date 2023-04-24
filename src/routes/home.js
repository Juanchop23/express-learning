const express = require("express");
const axios = require('axios')

const app = express.Router();

//Solicitud de la ruta inicial
app.get("/", (req, res) => {
  let isActive = false;

  const users = [
    {
      id: 1,
      name: "ryan",
      lastname: "perez",
    }, 
    {
      id: 2,
      name: "joe",
      lastname: "miller",
    }
  ];

  res.render("index", {
    title: "Index page",
    isActive,
    users
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/dashboard", (req, res) => {
  //No es un texto sino el nombre del archivo
  res.render("dashboard");
});

app.get("/posts", async(req, res) => {

  //Trayendo datos externos. Axios ahorra trabajo a
  //comparación de Node.

  //Debo ejecutar axios de manera asíncrona
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  res.render("Posts", {
    posts: response.data
  });
});

module.exports = app;