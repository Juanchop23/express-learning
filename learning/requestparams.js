const express = require("express");

const app = express();

//Express tiene un concepto para extraer el valor (nombre) de un usuario.
//Se colocan dos puntos
app.get("/hello/:username", (req, res) => {
  //Muestra los parámetros que estén en la URL
  //El último parámetro es qué quiero extraer de la solicitud

  //Quiero saber el tipo de datos de la solicitud (ver terminal)
  console.log(typeof req.params.username);
  //Se pueden concatenar
  res.send(`Hello ${req.params.username.toUpperCase()}`);
});

//Verificar si la ruta cumple X parámetros y devolver algo
app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;

  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

//Otro modo de construir el método de arriba. El params se debe
//dejar por si en algún momento queremos extraer otro tipo de datos
//de él

// app.get("/add/:x/:y", ({ params: { x, y } }, res) => {
//   res.send(`Result: ${parseInt(x) + parseInt(y)}`);
// });

app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === "juancho") {
    return res.sendFile("./javascript.png", {
      root: __dirname
    });
  }

  res.send('El usuario no tiene acceso')
});

app.get('/name/:name/age/:age', (req,res)=> {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log(`Server on port ${3000}`);
