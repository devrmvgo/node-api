const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o APP
const app = express()

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true})

//Importa os models
requireDir('./src/models')

//Acesso ao model Product
const Product = mongoose.model('Product')

//Primeira Rota (Rota raiz)
app.get('/', (req, res) => {
    
    //Inserindo um produto, pela rota raiz, na base de dados MongoDB
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })


    res.send("Welcome")

})

app.listen(3001)