function calistir(deger){
    setTimeout(function(){
        console.log("Araba  calıstır.");
        deger(deger);
    }, 2000);
}

function calistir2(){
    console.log("gaza bas");
}

calistir(calistir2);

/**************** */

function sayi(sayi,callbackFonk){
    if(sayi%2==0){
        callbackFonk("Sayı Çift");
    }
    else{
        callbackFonk("Sayı Tek");
    }
  }

var deger = 8;
sayi(deger,deneme);

function deneme(deger){alert(deger);}