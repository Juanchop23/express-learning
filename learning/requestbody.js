const express = require('express')

const app = express()

//Es importante que en backEnd pueda interpretar la petición
//que hace el cliente al servidor

//Parsear solicitud de archivo de texto del cliente
//Si se le envía otro tipo de dato, se procesa pero
//no se entiende.
app.use(express.text())
//Parsea solicitudes JSON
app.use(express.json())

//Se especifica que interpretará una URL sin datos complicados. EJ: podrían ser textos,
//pero en este caso recibe un formulario desde ThunderClient
//Devuelve un JSON porque es la forma en que el backEnd lo interpreta
app.use(express.urlencoded({extended: false}))
//Luego de parsear las solicitudes, las pasa al método debajo

app.post('/user', (req,res)=> {
    //Leer el body de la solicitud del cliente al servidor
    console.log(req.body)
    res.send('Nuevo usuario creado')
})


app.listen(3000)
console.log(`Server on port ${3000}`)