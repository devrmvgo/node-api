const express = require('express')

//Iniciando o APP
const app = express()

//Primeira Rota (Rota raiz)
app.get('/', (req, res) => {
    res.send("Welcome")

})

app.listen(3001)