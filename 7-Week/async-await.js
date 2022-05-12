// const durum = true;
// const user = {id:1, adi:"Ahmet"};

// function login() {
//     return new Promise((resolve, reject) => {
//         if (durum) {
//             setTimeout(() => {
//                 resolve(user);
//             }, 2000);
//         } else {
//             reject("Kullanıcı Bulunamadı");
//         }
//     });
// }


// function listele() {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("ilanlar listeleindi");
//             }, 1000);

//     });
// }

// async function islemAkisi() {
//     await login().then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=> {
//         console.log(err);
//     });
//     listele().then((data1)=>{
//         console.log("data geldi");
//     });
// }

// islemAkisi();


const data = [];
const durum = true;

const dataLoader = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = require("./data");
            data.push(users);
            if(durum){
                //resolve(data); burda aşagıdaki acıklama için burda veri gondermemiz gerekiyor
                resolve();
            } else {
                reject("Hata var");
            }
        }, 3000);
        
    });

};

const dataPrinter = () => {
    setTimeout(() => {
        data.forEach(data => console.log(data));
    }, 2000);
}


async function runTime() {
    await dataLoader()
        // .then((response) => console.log(response))
        // .catch((e) => console.log(e));
        dataPrinter();
}

runTime();

