const express = require("express");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

//BODY PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//DB CONNECTION
connectDB();

//STATIC FOLDER
app.use(express.static("static"));

//ROUTES
app.use("/", require("./routes/registration"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/home"));
app.use("/", require("./routes/notAvailable"));
app.use("/", require("./routes/orderSuccess"));
app.use("/", require("./routes/registerSuccess"));


const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
