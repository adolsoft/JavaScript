const { request } = require('express');
const express = require('express');
const students = require('./data');
const app = express()

const port = 3000;


app.listen(port, () => {
    console.log("3000 port dinleniyor.");
});


app.get('/', function (req, res) {
    res.send('Hello World deneme')
  });


  app.post("/post", (req, res) => {
    res.send({
      mesaj: "Post isteği çalıştı",
    });
  });

  app.get("/students", (req, res) => {
    res.send({
      mesaj: "get isteği çalıştı",
      students,
    });
  });
''
  
app.get("/students/:id", (req, res) => {
  const result = students.find((student) => student.id == req.params.id);
  res.send({
    mesaj: "id li get isteği çalştı",
    data: result,
  });
});