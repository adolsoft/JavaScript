console.log('hello word');


// value type
// string
var  adiSoyadi = "Osman Mert" // hem tek tırnak hemde cift tırnak kullanılabilir. 
var okulNumarasi = "123"; // uzerinde matemetik işlemleri yapabileceksek number değişkenine atamamız gerekiyor

// number
var yasi = 22;
var boyu = 1.86;// sayısal değişkenler nokta ile ifade edilir

// boolen
var sinaviGectimi = true;
sinaviGectimi = false ;

console.log( 1 > 2 > 3);
console.log( 3 < 2 < 1);


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

// console.log(1 == '1');


// date
var date = new Date();
console.log( date );

// undefined
var a;// bir değişten atatık ama herhangi bir işlem atamadık daha sonra kullanacagız.


// referans type



// object
        var araba = {
            marka: 'bmw',
            model: 2011,
            rengi: 'Kirmizi',
            motor:  {
                gucu: '120P',
                tipi: 'Dizel',
                bakimAraligi: {
                    km: '10.000',
                    zaman: '1 yil',
                    yenilenmisMi: true,
                    yenilenmeZamani: new Date(),
                }
            }
        }

        console.log(araba);
        console.log(araba.marka);
        console.log(araba.model);
        //console.log(araba.motor.bakimAraligi.yenilenmeZamani);

        // arrayy

        var alisverisListesi = [
            'ekmek',
            'süt',
            'yumurta'
        ]

        //console.log(alisverisListesi);
        //console.log(alisverisListesi[1]);
        //console.log(alisverisListesi.length);
        
        for (let index = 0; index < alisverisListesi.length; index++) {
            //const element = array[index];
            console.log('Liste Elemenı' + index);
            
        }

        var liste = ['mahmut', 12, 12.56, true, {yasi:23}, [1, 2, 3], araba, liste ];
        //console.log(liste);

//  var obj_1 = {

//  }

//  var obj_2 = {

//  }

// console.log(obj_1 == obj_2); // sonuc false çıkar

// var a = 'osman';
// console.log(a);

// var b = a;
// console.log(b);
// b = 123;
// console.log(b);

var a = {};
//console.log('a degiskeni' + a);
var b = a;
//console.log('b degiskeni' + b);

a.adi = 'abc';
a.deneeme = 'asdadas';

console.log(b);
console.log(a);