const express = require("express")
const router = express.Router()
const productModel = require("../models/product.model.js")

//CRUD
//*create -> POST

router.post("/producto", async (req, res) => {

  try {

    await productModel.create(req.body)
    res.status(201).send("Producto agregado")

  } catch (err) {
    res.status(500).send("Falla al agregar el producto")
  }

})

//*read -> GET

router.get("/productos", async (req, res) => {
  try {
    const productos = await productModel.find()
    if (productos) {
      res.status(200).send(productos)
    } else {
      res.status(200).send("Esta vacio")
    }
  }
  catch (err) {
    res.status(500).send("Fallo algo")
  }
})

router.get("/productos/:id", async (req, res) => {
  try {
    const productoNombre = await productModel.findById(req.params.id)
    if (productoNombre) {
      res.status(200).send(productoNombre)
    } else {
      res.status(404).send("Not Found")
    }
  }
  catch (err) {
    res.status(500).send("Fallo algo")
  }
})

//*update -> PUT
router.put("/productos/:id", async (req, res) => {
  try {
    const id = req.params.id
    const productoId = await productModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).send(productoId)

  } catch (err) {
    res.status(500).send("Fallo algo")
  }
})

//*delete -> DELETE

router.delete("/productos/:id", async (req, res) => {
  try {
    const id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.status(204).send("Producto eliminado")
  }
  catch (err) {
    res.status(500).send("Fallo algo")
  }
})

module.exports = router