//calback fonksiyonlar

const { setTimeout } = require("timers");

// function adYaz(ad) {
//     setTimeout(() => {
//         console.log(ad);
//     }, 2000);
// };

// adYaz("ahmet");
// const topla = (num1, num2) => {
//     return num1 + num2;
// }

// const display = (islem) => {
    
//     setTimeout(() => {
//         console.log(islem);
//     }, 4000);       
// }

// display(topla(1, 2));

// function loginOl(islem1, islem2) {
//     setTimeout(() => {
//         console.log("Login işlemi başarılı");
//         //ikini işlemi cağırabiliriz
//         islem1(islem2);

//     }, 2000);
// }

// function listele(islem) {
//     setTimeout(() => {
//         console.log("ilanlar listelendi");
//         islem();
//     }, 1000);
    
    
// }

// function cikis() {
//     setTimeout(() => {
//         console.log("Cıkıs yapıldı");
//     }, 500);
// }

// loginOl(listele, cikis);


// function adYaz(ad, calback) {
//     setTimeout(() => {
//         console.log(ad);
//         calback("DOLU")
//     }, 2000);
// }

// function soyadYaz(soyad) {
//     setTimeout(() => {
//         console.log(soyad);
//     }, 1000);
// }


// adYaz("Ahmet", soyadYaz);


const todos = [
    {title:"todo1", description:"konu tekrarı yapılacak"},
    {title:"todo2", description:"alıştırmaya cozulecek"},
    {title:"todo2", description:"odev yapılacak"},
];

function todoListe() {
   
setTimeout(() => {
    todos.forEach(element => {
        console.log(element);
    });
}, 2000);
    
}

function newTodo(todo, calback) {
    setTimeout(() => {
        todos.push(todo);
        calback();
    }, 3000);
}




newTodo({title:"todo4", description:"yeni gorev"}, todoListe);
