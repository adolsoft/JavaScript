const Users = require("../models/Users.js");

const register = async (req, res) => {
    const user = ({username, password, name, surname} = req.body);
    try {
        const data = await Users.create(user);//burası kaydeder. Sonra bir cevap dondu o donen cevabı data eşitledik.
        res.status(200).json(data)  // kullanıcıya geri gönderdik.

    } catch (error) {
        res.status(400).json({message: "User could not created."})
    }
   // res.send(user);
};

const login = async (req, res) => {
    const user =({username, password } = req.body); 
    const data = await Users.findOne({username}).exec(); 
    if (!data)  { // sonuc bulamadıysa
        return res.status(404).json({message:"User cannot be found.."});
    }
    
    const isValidate = await data.validatePassword(password);    // isValidate true ve false deger dondurdugu için boyle bir isimlendirdik

    if (!isValidate) {
        return res.status(403).json({message:"The password is incorrect.."}); // şifre uyuşmadı ise bu hatayı gondurur.
    };
    const loggenIdUser = {
        id: data.id,
        username: data.username,
        name: data.name,
        surname: data.surname
    }

    res.status(200).json(loggenIdUser); // data geri gönderdik.
    //password === "$2b$10$J4m67LDOQsf7yUe9nGxc1eUcthtA5xo.1SzJoNCR8lzW.qaceXbMe";
};

const find = async (req, res) => {
    const id = req.params.id;
   try {
        const data = await Users.findOne({_id: id}).exec();
        res.status(200).json(data);
   } catch (error) {
    res.status(404).json({message:'User cannot be found.'});
   }
};

const findAll = async (req, res) => {
    
   try {
        const data = await Users.find().exec();
        res.status(200).json(data);
   } catch (error) {
    res.status(404).json({message:'User cannot be found.'});
   }
};

const update = async (req, res) => {
    const user = ({id, username, name, surname} = req.body); // body içinde bize bu bilgileri gönderiyor.
    try {
         const data = await Users.updateOne({ _id: user.id }, { $set: user }).exec(); // bu kaydı bu ve update et metodu var moongose // bir tanesi sorgu tarafı bir tanesi update edilecek yer // _id: user.id  bul ve user değişkenini update et anlamındadır. update ederken mongodb kullandığı bir anahtar vardı. $set:
         res.status(200).json(data);
    } catch (error) {
     res.status(400).json({message:'User cannot be update.'});
    }
 };

const remove = async (req, res) => {
    const id = req.params.id;
    try {
         const data = await Users.deleteOne({ _id: id }).exec(); 
         res.status(200).json(data);
    } catch (error) {
     res.status(400).json({message:'User cannot be delete.'});
    }
 };

module.exports = {
    register,
    login,
    find,
    findAll,
    update,
    remove,
};