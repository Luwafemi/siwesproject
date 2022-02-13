const express = require("express");
const {engine} = require("express-handlebars");
const connectDB = require("./config/db");
const session = require('express-session');


require("dotenv").config();

const app = express();

//BODY PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//SESSION MIDDLEWARE
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'cdkhw484hui'
}));


//DB CONNECTION
connectDB();

//STATIC FOLDER
app.use(express.static("static"));

//Handlebars Middleware
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

//ROUTES
app.use("/", require("./routes/registration"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/logout"));
app.use("/", require("./routes/home"));
app.use("/", require("./routes/notAvailable"));
app.use("/", require("./routes/orderSuccess"));
app.use("/", require("./routes/registerSuccess"));


const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
