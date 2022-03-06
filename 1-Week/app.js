//console.log('Merhaba Dünya');//console yazdırma

//değişken tipi + değişken ismi = değişken değeri

var nameStr    =   "Ahmet";//değişken tanımlama 
var age     =   99; 

console.log("Ad: "+ nameStr + " Yaş:"  + age);

isim = "Özlem";
yas = 18;

console.log("Ad: "+ isim + " Yaş:"  + yas);

isim = "Elif ";
yas = 14;

console.log("Ad: "+ isim + " Yaş:"  + yas);

isim = "Eda ";
yas = 12;

console.log("Ad: "+ isim + " Yaş:"  + yas);

//Alt + Shift + F ekranı düzenler

/**
 yorum kısmı 

 == eşit ise
 === veri tiği dahil eşitmi 

 != eşit Değilse

 !== veri tiği dahil eşit değilse

< küçüktür
> büyüktür
<= kücük esit
>= büyük eşit
 
 */


var num1 = 1;
var num2 = 1;
var num3 = 2;

console.log((num1 == num2));
console.log((num1 == num3));
/*

&& ve
|| veya 

*/

console.log((num1 == num2) &&  (num1 == num3));


var havadurumu = "Güneşli";
var günesli = "Güneşli";
var bulutlu = "bulutlu";

if (havadurumu == günesli) {
    console.log("Hadi gezelim ")
} else {
    console.log("Bunlar eşit değil")
}

// For döngüsü başlangız; duracagımız nokta; yolda nasıl gidecegiz.

for (var i= 0; i<=10; i++){
    console.log("i sayisi :" + i);
}

for (var num = 20; num >=0; num--){
    console.log("Num sayisi :" + num);
}








