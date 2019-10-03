const express = require('express')
const mongoose = require('mongoose')

//Iniciando o APP
const app = express()

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true})

//Primeira Rota (Rota raiz)
app.get('/', (req, res) => {
    res.send("Welcome")

})

app.listen(3001)