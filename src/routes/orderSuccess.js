const path = require('path')
const express = require("express")
const router = express.Router()


router.get("/orderSuccess", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/orderSuccess.html"))

})


module.exports= router