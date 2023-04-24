// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res)=> {
//     //Devolviendo un archivo HTML
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

// ====== TODO LO ANTERIOR FUE HECHO SOLO CON NODE ======


const express = require('express')
const app = express()

app.get('/products', (req, res)=> {
    res.send('Lista de productos')
})

app.post('/products', (req, res)=> {
    res.send('Creando productos')
})

app.put('/products', (req, res)=> {
    res.send('Actualizando productos')
})

app.delete('/products', (req, res)=> {
    res.send('Eliminando productos')
})

app.patch('/products', (req, res)=> {
    res.send('Actualizando una parte de los productos')
})

//Servidor
app.listen()
console.log(`Server on port ${3000}`)