// const topla = (num1, num2) => {
//     return num1 + num2;
// }

// const displayer = (islem) => {
//     setTimeout(() => {console.log(islem)}, 2000);
// }

// displayer(topla(4,5));

/************************************** */

// function login(ikinciIslem){
//     setTimeout(() => {
//         console.log("login başarılı");
//         ikinciIslem();
//     }, 2000);
        
// }

// function listeleme() {
//     setTimeout(() => {
//         console.log("ilanları listelendi");
//     }, 1000);
// }

// login(listeleme)

/***************************** */

function adYaz(ad, callBack) {
    setTimeout(() => {
        console.log(ad);
        callBack();
    },2000)
}

function soyad() {
    setTimeout (()=> {
        console.log("Kibar");
    },1000)
}

adYaz("Ahmet", soyad)

/**************************************** */

// todo örneğgini tekrark izledikten sonra yaz 


/****************************************** */

