const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('user ana sayfası');
});

router.get('/usersListe', function (req, res) {
    console.log(req);
    res.send(
        JSON.stringify([
            {name: 'ahmet', age: '30'},
            {name: 'özlem', age: '30'},
        ])
    );
});

module.exports = router;