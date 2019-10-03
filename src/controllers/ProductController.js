//Importa o DB
const mongoose = require('mongoose')

//Importa a tabela Product do DB
const Product = mongoose.model('Product')

//Exporta objeto
module.exports = {
    //Lista de todos os produtos do DB
    async index(req, res){
        //Produra produtos e armazena na variavel
        const products = await Product.find()

        //Retorna lista de produtos em JSON
        return res.json(products)
    },

    //Listar um produto pelo ID
    async show(req, res){
        //Procura o produto pelo ID pego pelo parametro da rota
        const product = await Product.findById(req.params.id)

        //Retorna o produto em JSON
        return res.json(product)
    },

    //Criação de produtos no DB
    async store(req, res){
        //Pega os dados da requisição no corpo
        const product = await Product.create(req.body)

        return res.json(product)
    },

    //Alteração de produtos no DB
    async update(req, res){
        //Pega o produto pelo id informado na roa e atualiza-o com os dados do corpo 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true})
        //O new:true retorna o produto atualizado com os novos dados

        return res.json(product)
    },

    //Remoção de produtos no DB pelo ID
    async destroy(req, res){
        //Procura o produto pelo ID pego pelo parametro da rota e remove
        const product = await Product.findByIdAndRemove(req.params.id)

        //Retorna uma resposta de sucesso sem conteudo
        return res.send()
    }

}