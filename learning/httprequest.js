const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//En vez de una ruta se puede enviar un archivo
app.get("/miarchivo", (req, res) => {
  res.sendFile("./javascript.png", {
    //Forma de decir de Node que el archivo está desde
    //la ruta inicial de nuestro disco duro

    //Puede devolver cualquier tipo de archivo
    root: __dirname,
  });
});

//No es necesario colocar los JSON entre comillas por lo que Express
//se encarga de formatear esta clase de archivos
app.get("/user", (req, res) => {
  //Al ejecutar json, este espera un objeto válido de JSON
  res.json({
    name: "juan",
    lastname: "oe",
    age: 400,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "some street 123",
    },
  });
});

//No cambia de página. Solamente envía una petición
app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
  });

app.listen(3000);
console.log(`Server on port ${3000}`);
