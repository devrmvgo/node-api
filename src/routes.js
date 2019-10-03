const express = require('express')
const routes = express.Router()
//Importa o controlle de produto
const ProductController = require('./controllers/ProductController')

//Primeira Rota (Rota raiz)
routes.get("/products", ProductController.index)

//Exporta as rotas
module.exports= routes

