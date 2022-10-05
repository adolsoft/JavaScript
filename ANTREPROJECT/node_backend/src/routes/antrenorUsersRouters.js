const express = require('express');
const auth = require("../middlewares/auth"); //token kontrol ediyor.

// token kontrolü burda yapılacak

const { login, register, find, findAll, remove, update } = require("../services/antrenorUsersService");

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/:id',find);
router.get('/', auth, findAll); // buradada ('/', auth, findAll)  auth araya ekleyip gücenli olarak tanımlıyorduk.
router.delete('/:id', remove);
router.patch('/', update);

module.exports = router;