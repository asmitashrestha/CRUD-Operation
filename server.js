const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const menuRoutes = require('./Routes/menuRoute')

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/menu',menuRoutes)

app.listen(5000, () => {
  console.log("Server started at port 5000");
});

