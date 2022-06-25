 // mongoose import ediyoruz.
const mongoose  = require('mongoose');



const hash = require("../helpers/hash");

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    birthDate:{
        type:Date,
        required:false
    },
    createDate:{
        type:Date,
        default:Date.now()
    },
});





//pre metodu veritabanına kaydedilmeden önce çalışır. Örneğin bir şifre hashlenir.
userScheme.pre('save', function(next){

    if (this.password) this.password = hash(this.password);
    next();

});

// password karşılaştırılır.
userScheme.methods.validatePassword = function(pass){
  return bcrypt.compare(pass, this.password);
};




const Users = mongoose.model('Users',userScheme);

//modelimi export ediyoruz.
module.exports = Users;
