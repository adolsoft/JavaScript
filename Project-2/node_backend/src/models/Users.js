const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const hash = require("../helpers/hash");


const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
   

});


//password hashing kısmını
userScheme.pre("save", function(next){
    if(this.password) this.password =  hash(this.password);
    next();
})

// password validate kısmı
userScheme.methods.validatePassword = function ( pass) {//method ismi validatePassword not buraya istediğimiz ismi verebiliriz. 
    return bcrypt.compare(pass, this.password);//true veya false değer döndürür.
}


const User = mongoose.model("Users", userScheme );
module.exports = User;
