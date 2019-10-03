const mongoose = require('mongoose')
//Importa paginate (Paginação da listagem)
const mongoosePaginate = require('mongoose-paginate')

//Registrando model na aplicação
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    url:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

})

//Paginação da listagem
ProductSchema.plugin(mongoosePaginate)
//Exporta o model
mongoose.model('Product', ProductSchema)