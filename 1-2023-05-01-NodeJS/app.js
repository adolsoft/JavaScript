const express = require("express");

const PORT = 3000;

const app = express();
const router = express.Router();

app.use(router);


router.get('/users', (req, res)=>{ ////sorguuu için 
    res.send('get isteği alındı');
});
router.post('/users', (req, res)=>{/// yeni bir kayıt
    res.send('post isteği alındı');
});
router.put('/users', (req, res)=>{//kayır değiitirme
    res.send('put isteği alındı');
});
router.delete('/users', (req, res)=>{
    res.send('delete isteği alındı');
});








app.listen(PORT, ()=>{
    console.log(`Server ${PORT} çalısıyor.`);
});