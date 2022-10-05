const express = require('express');

const {create, findSporcu, update, remove} = require('../services/sporcuUsersService');

const router = express.Router();

router.post("/create", create);
router.get("/find", findSporcu);
router.patch("/update", update);
router.delete("/delete", remove);

module.exports = router;  // burayı app.js kullanıyoru..