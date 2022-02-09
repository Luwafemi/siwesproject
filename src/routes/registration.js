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
        let data = {username:'xxxxx', password:'xxxxxxxxx'}
        res.render("registerSuccess", data)
      } catch (err) {
        console.error(err);
        res.send("Sorry! An error occurred!");
      }

})


module.exports= router