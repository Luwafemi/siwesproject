const path = require('path')
const express = require("express")
const router = express.Router()


router.get("/home", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/home.html"))

})


module.exports= router