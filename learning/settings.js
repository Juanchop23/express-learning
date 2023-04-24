const morgan = require('morgan')

const express = require("express");

const app = express();

//Los settings son más importantes que los middlewares

//Colocando nombres a las aplicaciones
//Sirve para que cuando requiera nuevamente la variable,
//use el método contrario (set <> get)
app.set('appName', 'express Course')
app.set('port', 3000)
app.set('case sensitive routing', true) //Reservado por Express para respetar el sensite case

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//En Express no importa el case sensitive en cuanto a URLs
app.get("/userName", (req, res) => {
  res.send("Username route");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

//En vez de darle el número a secas, se le pide llamar
//a la variable port
app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);