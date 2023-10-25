const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRouter = require("./routes/product.router.js")
const userRouter = require("./routes/userRouter.js")
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const url = "mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/"

app.use("/", productRouter)
app.use("/user", userRouter)

async function connectToMongo(){

  try{

    await mongoose.connect(url)
    app.listen(PORT, ()=>{
      console.log(`Escuchando en: http://localhost:${PORT} y BD conectada`);
    })

  }
  catch(err){
    console.log(err);
  }

}

connectToMongo()