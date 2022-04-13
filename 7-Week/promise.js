
// const sozVerdik = new Promise(function(resolve, reject){
//     let herseyYolunda = true;
//     if (!herseyYolunda) {
//       resolve('İşlem tamam!');
//     } else {
//       reject('Bir sıkıntı var...');
//     }
//   })

const { resolve } = require("path");

//   sozVerdik.then(function(cevap){
//     console.log(cevap) // 'İşlem tamam!' yazısını basar
//   }).catch(function(hata){
//     console.log(hata) // 'Bir sıkıntı var...' yazısını basar
//   })


// const todos = [
//   { title: "todo1", description: "konu tekrarı yapılacak" },
//   { title: "todo2", description: "alıştırmaya cozulecek" },
//   { title: "todo2", description: "odev yapılacak" },
// ];

// function todoListe() {
//   setTimeout(() => {
//     todos.forEach(element => {
//       console.log(element);
//     });
//   }, 2000);

// }

// function newTodo(todo, calback) {
//   return new Promise((resorve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//       const err = false;
//       if (!err) {
//         resorve();
//       } else {
//         reject('Hata var.');
//       }
//     }, 3000);

//   })

// }

// newTodo({
//   title: "todo4",
//   description: "yeni gorev"
// }).then((resorve) => {
//   todoListe();
// }).catch((err) => {
//   console.log(err);
// });

//Promesi.all

//const p1 = new Promise.resolve("P1");


const p1 = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});


const p2 = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("ben 2 Promise");
  }, 1000);
});

const p3 = 123456;

Promise.all([p1,p2,p3]).then((promises) => {
  console.log(promises);
})