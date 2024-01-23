const express = require("express");
const router = express.Router();
const { register, login, find, findAll, update, remove } = require("../services/usersServis.js");

// middleware 
const auth = (req, res, next) => {
    const loggedInUsed = false //true; // burada simüle ettik . Burayı false yaparsak
    if (!loggedInUsed) {
        return res.status(403).json({messager:"Unauthorize user..."})
    }
    //yukarıdaki işlemleri hepsi başarılı ise  ve aşağıdaki next() gördüyse işleme devam et anlamındadır.  
    // req, res, next  buraya next bu yuzden yazdık 
    next(); 
}

//router.get('/', (req, res) => {
 //   res.send("get istegi geldi");
//});


router.post("/register", register);

router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);  // buraya+ı koruma altına almak için middleware kullanıyoruz.
// burada findAll kısmına gecmeden once auth kısmına bak burda işlemlerini yap eger next ulaşırda daha sonra findAll çalıştır.

router.patch("/", update);

router.delete("/:id", auth, remove);

module.exports=router;