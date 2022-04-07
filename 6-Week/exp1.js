// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {users} = require('./data.js');

//console.log(users);

let resut = null;
let resut1 = null;

result = users.find(user=> user.firstName == 'Madison' && user.lastName == 'Marshall');
result1 = users.filter(user=> user.firstName == 'Madison' && user.lastName == 'Marshall');

console.log(result.id); // nesne halinde getiriyor. burada result.id olarak kullanabiliriz

console.log(result1[0].id); // dizin halinde getiriyor
