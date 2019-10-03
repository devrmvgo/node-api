const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o APP
const app = express()
//Permite o envio de dados para aplicação no format de jason
app.use(express.json())

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true})

//Importa os models
requireDir('./src/models')

//Acesso ao model Product
const Product = mongoose.model('Product')

//Importa as rotas
app.use('/api', require('./src/routes'))

app.listen(3001)