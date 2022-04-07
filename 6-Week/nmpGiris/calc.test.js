const calc = require('./calc');

describe('Şuanda calc fonksiyonunu test ediyoruz:', () => {
    test('2+2=4 olmalı', () => {
        expect(calc(2,2,'+').islemSonucu).toBe(4);
    });
    test('8-2= 6 olmalı', () => {
        expect(calc(8,2,'-').islemSonucu).toBe(6);
    });
    test('8*2= 16 olmalı', () => {
        expect(calc(8,2,'*').islemSonucu).toBe(16);
    });
    test('8/2= 4 olmalı', () => {
        expect(calc(8,2,'/').islemSonucu).toBe(4);
    });
    test('operator hatası olması gerekiyor', () => {
        expect(calc(8,2,'p').islemSonucu).toBe('Hata');
    });
    test('operator hatası olması gerekiyor', () => {
        const hataSonucu = {
            islemSonucu: 'Hata',
            hata: ['Operatör hatasi']
        };
     expect(calc(8,2,'p')).toMatchObject(hataSonucu);
    });
    test('bölme işleminde ikinci sayı sıfır olamaz!!', () => {
        const hataSonucu = {
            islemSonucu: 'Hata',
            hata: ['Bölme isleminde ikinci sayi sifir olamaz!!']
        };
        expect(calc(3,0,'/')).toMatchObject(hataSonucu);
    });


});  