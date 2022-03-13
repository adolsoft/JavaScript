function calc(sayi1, sayi2, islem){
    var result = {
        sonuc: 0,
        hata: ""
    }

    // 1. Sayı yerine string deger girilmiş mi?
    // 2. bölme işleminde ikinci sayı sıfır olmamalı
    // 3. islemi dogru secmeme

    if (typeof sayi1 !=='number' || typeof sayi2 !== 'number') {
        result.hata = 'Lütfen Sayı Giriniz';
        return result;
    }

    if (islem == '/' && sayi2 == 0) {
        result.hata = 'Bölme işleminde İkinci sayı 0 olamaz';
        return result;
    }

    if (['+','-','/','*'].indexOf(islem)== -1) {
        result.hata = 'Hatalı islem operatoru';
        return result;
    }
   
   
    //hata yokken calısacak kodlar

          switch (islem) {
        case '+':
            result.sonuc = sayi1 + sayi2
            break;

        case '-':
            result.sonuc = sayi1 - sayi2
            break;   
        
        case '/':
            result.sonuc = sayi1 / sayi2
            break;   
    
        case '*':
            result.sonuc = sayi1 * sayi2
            break;   
        default:
            result.sonuc = 0;
            result.hata = 'Hatalı islem operatoru'
            break;
    }


    return result;

}

console.log('Toplama :', calc(5, 2, "dsdf"));
console.log('Çıkarma :',calc(5, 2, "-"));
console.log('Bölme :',calc(5, 2, "/"));
console.log('Çarpma :',calc(5, 2, "*"));
console.log('Bölme :',calc(5, 0, "/"));
console.log('Çarpma :',calc(5, 'fg', "*"));