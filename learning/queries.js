//Un signo de interrogación (?) en la URL se entiende como query

const { request } = require("express");
const express = require("express");

const app = express();

//En caso de ver porcentajes y números en la URL, esos son espacios
//interpretados por el navegador
app.get("/search", (req, res) => {
  console.log(req.query)
  if(req.query.q === 'books'){
    res.send('Lista de libros de JavaScript')
  }else {
    res.send('Página normal')
  }
});

app.get("/hello/:username", (req, res) => {
  //Enviando un query
  console.log(req.query.user);
  console.log(req.query.age);
  //Link de prueba: http://localhost:3000/hello/juan?user=prueba&age=40
  res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;

  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "juancho") {
    return res.sendFile("./javascript.png", {
      root: __dirname,
    });
  }

  res.send("El usuario no tiene acceso");
});

app.get("/name/:name/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
