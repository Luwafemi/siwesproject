const path = require('path')
const express = require("express")
const router = express.Router()
const Person = require("../models/Person");


router.get("/registration", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/registration.html"))

})
router.post("/registration", async (req,res)=>{
    try {
        // await Person.create(req.body); 
        res.write(`{username:'xxxxx', password:'xxxxxxxxx'}\n\n\n\n\n`)
        res.write("DO WELL TO KEEP YOUR CREDENTIALS SAFE!")
        res.end()
        // res.send([ {username:'xxxxx', password:'xxxxxxxxx'}, "DO WELL TO KEEP YOUR CREDENTIALS SAFE!",])
        // res.redirect("/registerSuccess");
      } catch (err) {
        console.error(err);
        res.send("Sorry! An error occurred!");
      }

})


module.exports= router