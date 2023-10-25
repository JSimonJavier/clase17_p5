const mongoose = require("mongoose")

const productModel = new mongoose.Schema({
  nombre: {type: String},
  tipo: {type: String},
  stock: {type: Number},
  precio: {type: Number}
})

module.exports = mongoose.model("Producto", productModel)