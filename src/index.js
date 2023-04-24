const morgan = require("morgan");
const express = require("express");
const path = require('path') //Concatenar directorios
const connectDB = require('./db')
require('ejs') //Facilita enviar HTML al cliente


connectDB()



const app = express();
app.use(morgan("dev"));

const HomeRoutes = require('./routes/home.js')
const UserRoutes = require('./routes/users.js')

//Settings
app.set('case sensitive routing', true)
app.set('appName', 'Express course')
app.set('port', 4000)
//Configurar EJS para que Express lo lea correctamente
app.set('view engine', 'ejs')
//Nombre de la carpeta, ruta absoluta (dirname), concatenar con la carpeta destino
//Ahora EJS sabe dónde encontrar los archivos 
app.set('views', path.join(__dirname, 'views'))


//middlewares
app.use(express.json())
app.use(morgan("dev"))

//Trayendo módulos de otros archivos
app.use(HomeRoutes)
app.use(UserRoutes)

//Todos los archivos dentro de la carpeta public pueden
//ser accedidos.
//Esto es mejor colocarlo al final por si ya el servidor
//buscó en todas las rutas disponibles y no encontró
//nada.
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.listen(4000);
console.log(`Server on port ${4000}`);