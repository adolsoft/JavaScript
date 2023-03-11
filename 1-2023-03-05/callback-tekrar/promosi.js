
// promise nedir


// ------------- BACKEND TARAFI ---------
// promiselerin yazılması
const loginOLdumu = true

const loginPromise =  () => {
const sonuc = new Promise((resolve, reject)=>{
    setTimeout(()=>{ 
        if(loginOLdumu) {
            resolve('Login işlemi başarili')
        } else {
            reject(`login işlemi başarisiz` )
        }
}, 3000);
return sonuc
}

const malakesiVarMi = true
const makalePromise = () => {
    const sonuc = new Promise((resolve, reject)=>{
    if (malakesiVarMi) {
        setTimeout(()=>{resolve('Makaleler Yuklendi')}, 2000)
        
    }else {
        reject(`Makaleler bulunamadi` )
    }
})
return sonuc;
}

//------------------------------------


// ------------- BACKEND TARAFI ---------
// promise kullanılması

loginPromise()
    .then((loginSonucu)=>{
        console.log(loginSonucu)
    })
    .catch((hata)=>{
        console.log(hata)
    })

makalePromise()
    .then((makaleSonucu)=>{
        console.log(makaleSonucu)
    })
    .catch((hata)=>{
        console.log(hata)
    })




//siraya sokulması






