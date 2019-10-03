const express = require('express')
const routes = express.Router()

//Primeira Rota (Rota raiz)
routes.get('/', (req, res) => {
    
    // //Inserindo um produto, pela rota raiz, na base de dados MongoDB
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // })


    res.send("Welcome")

})

//Exporta as rotas
module.exports= 'routes'

