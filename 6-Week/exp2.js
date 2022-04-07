// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const {users, comments} = require('./data');

result = null;


for (let index = 0; index < comments.length; index++) {
    
    result = users.find(users => users.id == comments[index].userId);
    console.log(result);
    
};
