const loginOlduMu = true;

const promise_1 = () => {
    const result = new Promise((resolve, reject) => {
        if (loginOlduMu) {
            resolve("başalılı oldu");
        } else {
            reject("login başarısız");
        }
    });
    return result;
}
const makalesiVarmi = true ;

const promise_2 = () => {
    const result = new Promise((resolve, reject) => {
        if (makalesiVarmi) {
            resolve("Makalesi Var")
        } else {
            reject("Makalesi Yok")
        }
    });
    return result
}



promise_1()
    .then((sonuc)=> {
       console.log(sonuc);    
    promise_2()
        .then((sonuc) => console.log(sonuc))
        .catch((error) => console.log(error))
        })
    .catch((error) => {
    console.log(error)
})


