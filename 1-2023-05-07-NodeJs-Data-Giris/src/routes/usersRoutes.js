const express = require("express");
const router = express.Router();
const { register, login, find, findAll, update, remove } = require("../services/usersServis.js")

//router.get('/', (req, res) => {
 //   res.send("get istegi geldi");
//});


router.post("/register", register);

router.post("/login", login);

router.get("/:id", find);

router.get("/", findAll);

router.patch("/", update);

router.delete("/:id", remove);

module.exports=router;