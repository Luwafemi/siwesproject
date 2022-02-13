const path = require('path')
const express = require("express")
const router = express.Router()
const restrict = require("../middleware/auth")

router.get("/home", restrict, (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/home.html"))

})


module.exports= router