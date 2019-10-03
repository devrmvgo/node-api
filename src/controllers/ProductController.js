//Importa o DB
const mongoose = require('mongoose')

const Product = mongoose.model('Product')

//Exporta objeto
module.exports = {
    //Lista de todos os produtos do DB
    async index(req, res){
        //Produra produtos e armazena na variavel
        const products = await Product.find()

        //Retorna lista de produtos em JSON
        return res.json(products)
    }


}