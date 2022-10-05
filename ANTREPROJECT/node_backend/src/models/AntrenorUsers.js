const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const hash = require("../helpers/hash");


const antrenoruserScheme = new mongoose.Schema({
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
// save kısmı çalışmadan once ilk burası çalısacak pasword şifreleyecek ve daha sonra kaydedecek.
antrenoruserScheme.pre("save", function(next){
   if(this.password) this.password =  hash(this.password);
   next();
})

// password validate kısmı  // ayrıca class içine antrenoruserScheme.methods.validatePassword validatePassword şsşmde metot ekleyebiliyoruz.
antrenoruserScheme.methods.validatePassword = function (pass) {//method ismi validatePassword not buraya istediğimiz ismi verebiliriz. 
    return bcrypt.compare(pass, this.password);//true veya false değer döndürür. // compare karşılaştırma yapar.
}


const AntrenorUser = mongoose.model("AntrenorUsers", antrenoruserScheme );
module.exports = AntrenorUser;
