
const express = require('express');
//const cors = require('cors');
const app = express();
//mongoose mongodb ile bağlantıyı kurmak için kısa yoldan bağlantı yapmamızı sağlıyor. kısa bir şekilde bağlantı kurmamaızı sağlıyor.
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const userApi = require('./userApi');

//mongo_db ile bağlantı sağlıyor.
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true });


//app.use(cors());
app.use(bodyParser.json());
app.use('/api', userApi);

app.listen(3004);