const path = require('path')
const express = require("express")
const router = express.Router()
const Person = require("../models/Person");
const genUsername = require("unique-username-generator");
const generator = require('generate-password');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get("/registration", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/registration.html"))

})
router.post("/registration", async (req,res)=>{
    try {
        // Username generator
        const username = genUsername.generateFromEmail(
          req.body.firstName.toLowerCase(),
          5
        );
        // Password generator
        var password = generator.generate({
          length: 10,
          numbers: true
        });
        

        req.body.username = username
        
        // password encryption and storage of  user details in DB
        await bcrypt.hash(password, saltRounds, function(err, hash) {
        req.body.password =hash
        Person.create(req.body); 
      });

        let data = {username, password}
        res.render("registerSuccess", data)
      } catch (err) {
        res.send("Sorry! An error occurred!");
      }

})


module.exports= router