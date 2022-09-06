const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;
const mongoURL = process.env.MongoURL;

//routing section
const usersRouter = require("./routes/usersRoutes");

app.use(bodyParser.json());
app.use('/users', usersRouter);

// db Config
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Mongodb connection is successful."))
  .catch((err) => {
    console.log(err);

  });



app.listen(PORT, console.log(`Server is running at PORT: ${PORT}`));

//console.log('Merhaba');