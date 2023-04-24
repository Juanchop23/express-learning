//Hay middlewares que otros desarrolladores ya hicieron
//y que podrían ayudar en los proyectos. Uno de los más famosos
//es morgan (npm i morgan).
const morgan = require('morgan')
//Morgan proporciona más detalles en la terminal
//haciendo de middleware. Por defecto trae mensajes
//largos, en su documentación hestán las maneras
//de hacerlos más entendibles.

const express = require("express");

const app = express();

//Verificar que antes de llegar a una ruta el cliente pase
//por los middlewares

//Antes de llegar a una ruta se puede ejecutar una función
//Se nos da el parámetro next para que el servidor no se quede esperando

// app.use((req, res, next) => {
//   console.log(`Route: ${req.url}  Method: ${req.method}`);

  //No importa la ruta que se cree después de este middleware.
  //Todas pasan por aquí
//   next();
// });


// === MIDDLEWARE HECHO DE 0 SIN USAR MORGAN ===
// app.use((req, res, next) => {
//   if (req.query.login === "hola@gmail.com") {
//     next();
//   } else {
//     res.send("No autorizado");
//   }
// });

//Todas las rutas que estén luego de las dos funciones anteriores
//van a estar protegidas por su lógica

// === usando morgan para crear middlewares ===
app.use(morgan('dev'))

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);