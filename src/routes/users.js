const express = require("express");

//Lo mismo que exportar módulos con JS
const app = express.Router();

app.get("/users", (req, res) => {
  res.render('users')
});

//Ahora se exporta sin necesidad de usar una función
module.exports = app;
