const express = require('express')
const routes = express.Router()
//Importa o controlle de produto
const ProductController = require('./controllers/ProductController')

//Rota de listagem de produtos
routes.get("/products", ProductController.index)
//Rota de listagem de produto pelo ID
routes.get("/products/:id", ProductController.show)
//Rota de criação de produtos
routes.post("/products", ProductController.store)
//Rota de alteração de produto pelo ID
routes.put("/products/:id", ProductController.update)
//Rota de remoção de produto pelo ID
routes.delete("/products/:id", ProductController.destroy)

//Exporta as rotas
module.exports= routes

