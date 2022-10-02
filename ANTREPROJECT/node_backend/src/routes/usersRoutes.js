const express = require('express');
const auth = require("../middlewares/auth"); //token kontrol ediyor.

//const Users = require('../models/Users'); // service klasörünü ıluşturduğumuz için bun gerek kalamdı
const { login, register, find, findAll, remove, update } = require("../services/usersService");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', find);

router.get('/', auth, findAll); // buradada auth araya ekleyip gücenli olarak tanımlıyorduk.

router.delete('/:id', remove);
router.patch('/', update);

module.exports = router;