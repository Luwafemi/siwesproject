const path = require("path")
const express = require("express")
const router = express.Router()
const Person = require("../models/Person");
const bcrypt = require('bcrypt');


router.get("/", (req,res)=>{
    if(req.session.user){
        return res.redirect("/home")
    }else{
       res.render("login",{layout:"loginLayout"})
    }
})

router.post("/", async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
   const user = await Person.findOne({username})
   if(user){
    let hash= user.password;
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            req.session.regenerate(function(){
                req.session.user = user;
                return res.redirect("/home")
                
              });
        }else{return res.render("login",{layout:"loginLayout",passwordError:"true"})}
    });
   }else{return res.render("login",{layout:"loginLayout",usernameError:"true"})}

})




module.exports= router