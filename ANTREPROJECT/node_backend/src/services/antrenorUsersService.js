const AntrenorUsers = require('../models/AntrenorUsers');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
 
const { username, password } = req.body;

try {
    const data = await AntrenorUsers.findOne({username}).exec();    // normalde bu sekilde yazılnalar({ username: username }) kısatma olarak ({ username } yazılabilir. 
    
  console.log(data);
  // aşağıda sorgu bulunup bulunmadığını kontrol et.
  if(!data) res.status(404).json({message:"Amtrenor users can't found."});

  if(data) {
    const validatePassword = await data.validatePassword(password); // busrası bize true veya false doner
    if (!validatePassword) {//şifre yanlış ise
        return res.status(403).json({message: "The password you enterend is incorrect"})
       }
    const antrenorUser = {
        id: data._id,
        username:data.username,
        email:data.email,
    };
     
   const accessToken = jwt.sign({antrenorUser}, process.env.jwt_secret_key); // burda bir sifre gerekiyor. / bu .env dosyasında tanımlıyoruz

    res.json({
        AntrenorUsers : { // eski degeri user
            token: accessToken,
        ...antrenorUser, // user tokeni ekleyip gonderiri
        },
        
    });
  };
} catch (error) {
    console.log(error);
    res.status(403).json({message:" aramada hata var"});
}




};

const register = async (req, res) => {
    try {
        const data = await AntrenorUsers.create(req.body)
        res.status(201).json(data); // 
    } catch (error) {
        //console.log(error);
        res.status(403).json({message:'Antrenor Users could not created '});
    }
};

const find = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await AntrenorUsers.findOne({_id: id}).exec();
        res.status(201).json({
            antrenorUser: {
                id: data._id,
                username: data.username,
                email:data.email,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({message:"Antrenor User could not found."});
    }
};

const findAll = async (req, res) => {
    try {
        const data = await AntrenorUsers.find().exec();
        const antrenorUser = data.map((item) => {
            return {
                id: item._id,
                username:item.username,
                email:item.email,
            }
        })
        res.json({antrenorUser});
    } catch (error) {
        console.log(error);
        res.status(403).json({message:" Antrenor User could not found."});
    }
};

const remove = async (req, res) => {
    const id =req.params.id;
    try {
        const data = await AntrenorUsers.deleteOne({_id: id}).exec();
        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(403).json({message:" User could not delete."});
    }
};

const update = async (req, res) => {
    const antrenorUser = ({ id, username, email, password } = req.body);
    try {
        const data = await AntrenorUsers.updateOne({_id: id}, {$set: antrenorUser}).exec();
        
        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(403).json({message:" AntrenorUsers could not update."});
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

