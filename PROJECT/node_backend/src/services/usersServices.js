const Users = require('../models/Users');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;
    
    const data = await Users.findOne({ username }).exec(); // { username } burası username = username anlamındadır.

    //console.log(data);

    if (!data) res.status(404).json({message: "User can't found"});

    if (data){ 
 
        const validatePassword = await data.validatePassword(password); // burası bize treu ve false döner.

        if (!validatePassword){

         return res.status(403).json({message: "The password is not correct"});
       }

       const user = {
            id:data._id,
            username:data.username,
            email:data.email,
       };

       const accessToken = jwt.sign({ user }, process.env.jwt_secret_key);


        res.json({
            user: {
                token: accessToken,
                ...user, 
            }
            
            });
    }

}

const register = async(req, res) => {
    //res.send(' post istegi geldi');
    const user = ({ username, email, password, birthDate } = req.body);

   //veri tabanına kayıt işlemi yapılıyor.
   try {

    const data = await Users.create(user);//burdaki sonucu dönüşünü beklemek iiçin async await kullanıyoruz.
    res.status(201).json(data);
   
} catch (error) {
    console.log(error);
    res.status(403).json({message: 'User cold not be created'});
    
 } 
}


const find = async(req, res) => {
    const id = req.params.id;
    try {
        const data = await Users.findOne({_id:id}).exec();

        res.json({
            user:{
                id:data._id,
                username:data.username,
                email:data.email,
            }
        });


    } catch (error) {
        res.status(403).json({message :"User could not fond."});
    }

}


const findAll = async(req, res) => {
    
    try {
        const data = await Users.find().exec();

        const user = data.map((item)=>{
            return {
                id:item._id,
                username: item.username,
                email: item.email,
            };
        });

        res.json(user);


    } catch (error) {
        res.status(403).json({message :"User could not fond."});
    }

}


const remove = async (req, res) => {
    
    const id = req.params.id;
    try {
        const data = await Users.deleteOne({_id:id}).exec();

        res.json(data);


    } catch (error) {
        res.status(403).json({message :"User could not deleted."});
    }


};

const update = async (req, res) => {
    
    const user = ({id, username, email, password} = req.body);
    try {
        const data = await Users.updateOne({_id:id}, {$set: user}).exec();

        res.json(data);


    } catch (error) {
        res.status(403).json({message :"User could not updated."});
    }


};



module.exports = {
    login,
    register,
    find,
    findAll,
    remove,
    update,
};