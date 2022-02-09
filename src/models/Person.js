const mongoose = require("mongoose");
const Personschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  MiddleName: {
    type: String,
  },
  DOB: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,

  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Person", Personschema);
