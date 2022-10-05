const Users = require('../models/Users');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;

    //mongoose sorgu olusturma
    //findOner kısında username:username yazılır yani username isminde bir username varmı anlamıdır. bunu kısa yazılımı username olarak yazılır.
    //sorguyu çalıştırmak için exec ile çalıştır.
    const data = await Users.findOne({username}).exec();

    console.log(data);
    // aşağıda sorgu bulunup bulunmadığını kontrol et.
    if(!data) res.status(404).json({message:"users can't found."})

    //bulundaysada 
    if(data) {
        //şifremizi kontol et
        const validatePassword = await data.validatePassword(password);
                                                      
        //console.log(validatePassword);
        if (!validatePassword) {//şifre yanlış ise
          return res.status(403).json({message: "The password you enterend is incorrect"})
         }
        const user = {
            id: data._id,
            username:data.username,
            email:data.email,
        };
         
       const accessToken = jwt.sign({user}, process.env.jwt_secret_key); // burda bir sifre gerekiyor. / bu .env dosyasında tanımlıyoruz

        res.json({
            user : {
                token: accessToken,
            ...user, // user tokeni ekleyip gonderiri
            },
            
        });
    }
};

const register = async(req, res) =>{
//res.send("post isteği geldi");

const user = ({ username, email, birthDate, password} = req.body);
// console.log(user);
//res.send(`${user} ismi geldi`);
try {
  
    //veritabanına istek gonderiyoruz.
    const data = await Users.create(user);
    //res.json(data);
    res.status(201).json(data);
    
} catch (error) {
    console.log(error);
    res.status(403).json({message:" User could not created."});
}

};

const find = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await Users.findOne({_id: id}).exec();
        
        res.json({
            user: {
                id: data._id,
                username:data.username,
                email:data.email,
            }
        })

    } catch (error) {
        res.status(403).json({message:" User could not found."});
    }
};

const findAll = async(req, res) =>{
    
    try {
        const data = await Users.find().exec();
        const user = data.map((item) => {
            return {
                id: item._id,
                username:item.username,
                email:item.email,
            }
        })

        res.json({user});

    } catch (error) {
        res.status(403).json({message:" User could not found."});
    }
};

const remove = async(req, res) => {
    const id = req.params.id;
    try {
        const data = await Users.deleteOne({_id: id}).exec();
        
        res.json(data);

    } catch (error) {
        res.status(403).json({message:" User could not delete."});
    } 
};

const update = async(req, res) => {
    
    const user = ({ id, username, email, password } = req.body);

    try {
        const data = await Users.updateOne({_id: id}, {$set: user}).exec();
        
        res.json(data);

    } catch (error) {
        res.status(403).json({message:" User could not update."});
    } 
};

//obje seklinde export ediyoruz 
//Bu import etmek için  usersRouter.js dosyasına """"const { login } = require("dosya adresini yaz ")  """" 
module.exports = {
    login,
    register,
    find,
    findAll,
    remove,
    update,
};
