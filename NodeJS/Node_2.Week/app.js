const express = require('express')
const app = express()

const postApi = require('./postApi');
const userApi = require('./userApi');

app.use('/postApi', postApi);
app.use('/userApi', userApi);

app.get('/', (req, res) => {
   res.send('Ana Sayfa')
 });

app.listen(3000);