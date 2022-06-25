// burası darabase modeli oluşturuyoruz.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ name: String, email: String, password: String });

const User = mongoose.model('User', userSchema);

//modullerimi export edip bu semayı heryerde kullanabilelim.
module.exports = User;