const path = require('path')
const express = require("express")
const router = express.Router()
const restrict = require("../middleware/auth")



router.get("/logout", restrict, (req,res)=>{
    req.session.destroy(function(){
        res.redirect('/');
      });

})


module.exports= router