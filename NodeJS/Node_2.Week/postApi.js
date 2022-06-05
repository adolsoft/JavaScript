const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('PostApi Ana Sayfası')
})


// const express = require('express');

// const router = express.Router();
const posts = require('./posts');

// router.get('/', function (req, res) {
//     res.send('<h1>Hello World user</h1>');
//  });
router.get('/postsListe', function (req, res) {
  //console.log(req);
   res.send(JSON.stringify(posts));
  });

  //module.exports = router;

 module.exports = router