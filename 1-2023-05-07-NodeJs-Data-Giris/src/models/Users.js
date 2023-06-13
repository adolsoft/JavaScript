const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  });

  const hash = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
      if (err) throw err;
      pass = hash;
    });
  };
  


// Password hashing
userSchema.pre("save", function (next) {
    if (this.password) {
      this.password = hash(this.password);
    }
    next();
  });

  // password validate  true ve false degeri doner
  userSchema.methods.validatePassword = function (data) {
    return bcrypt.compare(data, this.password);
  };


const Users = mongoose.model("Users", userSchema);

module.exports = Users;