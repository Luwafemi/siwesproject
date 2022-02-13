const path = require('path')
const express = require("express")
const router = express.Router()


router.get("/registerSuccess", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/registerSuccess.html"))

})


module.exports= router