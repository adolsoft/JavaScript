const jwt = require("jsonwebtoken");
const { model, modelNames } = require("mongoose");

const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if(!authHeader) return res.status(403).send({ message : " No token data...."});

    const token = authHeader.split(" ")[1];//token orta bolumunu almış oluyrouz.

    jwt.verify(token, process.env.jwt_secret_key, (err, data) => {
        
        if(err){
            return res.status(403).send({ message : " Unauthorized....", error: err});
        }
        next();
    });


   
};

module.exports = auth;