console.log('functions');

// fx (x+1)

// sonuc dondurmeyen funcksiyon
function islem(){
    var kullaniciAdi = "Özlem";
    console.log(kullaniciAdi);
}


// funksiyonu calıstırmak içinn

islem();
//console.log(islem);

// sonuc donduren funcksiyon

function topla(sayi_1, sayi_2){
    var result = sayi_1 + sayi_2
    return result
}
var sonuc = topla(1, 2);

function cikar(sayi_1, sayi_2){
    var result = sayi_1 - sayi_2
    return result
}



var cikarmaSonuc = cikar(5, 3);

console.log(sonuc);
console.log(cikarmaSonuc);


function user(userName, password){

    var result = 'Kullancı : ' + userName + ' şifre:' + password;
    return result;

}

console.log(user('ahmet', '1256Ankara0236'));


function login(userName, password){
    var result;
    if(userName == 'Murat'){
        result = 'Login basarılı';
    } else {
        result = 'login başarısız'
    }
    return result;
}

console.log(login("Murataaa"));

function userLogin(userName, password){
    var result = {
        kullaniciAdi: userName,
        sifresi: password
    }
    return result;

}

console.log(userLogin('Osman', '456'));

function kullaniciLoginOlduMu(){
    return true;
}

kullaniciLoginOlduMu();