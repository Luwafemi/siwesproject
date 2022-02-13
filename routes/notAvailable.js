const path = require('path')
const express = require("express")
const router = express.Router()


router.get("/notAvailable", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/notAvailable.html"))

})


module.exports= router