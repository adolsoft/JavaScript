const bcrypt = require('bcryptjs');// password hash işlemi için bcrypts kullanıyoruz.
// password hash işlemi için bcrypt kullanıyoruz.
const hash = (pass) => {
    const hashed = bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash)=>{
        if(err) throw err;
              pass = hash;
    })  

    return hashed;
}

module.exports = hash;