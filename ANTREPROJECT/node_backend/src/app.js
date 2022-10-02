const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require('mongoose');

// cors hatası ile ilgili
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT;
const mongoURL = process.env.MongoURL;

app.use(bodyParser.json()); // burası aşağıda satırsa olursa kayıt işlemi yapmıyor.

app.use(cors(corsOptions));/// cors hatası ile ilgili



//routing section
const usersRouter = require("./routes/usersRoutes");
const todosRouter = require("./routes/todosRoutes");


app.use('/users', usersRouter);
app.use('/todos', todosRouter);

// db Config
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Mongodb connection is successful."))
  .catch((err) => {
    console.log(err);

  });



app.listen(PORT, console.log(`Server is running at PORT: ${PORT}`));

//console.log('Merhaba');