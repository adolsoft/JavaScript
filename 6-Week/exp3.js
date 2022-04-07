// 3) Hangi kullanıcı 'OK great thanks' yorumunu yaptı?

const {users, comments} = require('./data');

result = null;

result = users.find(user => {
    yorumYapan = comments.find(yorum => yorum.text == 'OK great thanks');
     return yorumYapan.userId == user.id;
    // return  user.id == yorumYapan.userId;
})
console.log(result);
