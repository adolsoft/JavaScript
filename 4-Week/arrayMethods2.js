// ARRAY METHODS 2 - ES6 ile gelen yeni metodlar


const students = [
    { id: 1, adi: 'Murat', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 21, baslamaTarihi: 2010, bitirmeTarihi: 2014,  },
    { id: 2, adi: 'Ahmet', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 32, baslamaTarihi: 2000, bitirmeTarihi: 2006 },
    { id: 3, adi: 'Mahmut', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 18, baslamaTarihi: 1999, bitirmeTarihi: 2008 },
    { id: 4, adi: 'Senem', cinsiyeti: 'k', bolum: 'mühendislik', yasi: 45, baslamaTarihi: 1993, bitirmeTarihi: 1997 },
    { id: 5, adi: 'Osman', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 61, baslamaTarihi: 1980, bitirmeTarihi: 1988 },
    { id: 6, adi: 'Emine', cinsiyeti: 'k', bolum: 'iibf', yasi: 17, baslamaTarihi: 2017, bitirmeTarihi: 2021 },
];


// //console.log(students[0]);
// //console.log(students[1]);

// // for (let i = 0; i < students.length; i++) {
// //     console.log(students[i]);
    
// // }
// // console.log("--------------------------");
// // forEach() , dizideki elemanları sırayla bize döndürür.
// //students.forEach(i => console.log(i));
// // students.forEach(student => console.log(student));

// // let sum = 0;
// // const number = [65, 44, 12, 4];

// // number.forEach(topla);
// // document.getElementById("demo").innerHTML = sum;
// // function topla(deger){
// //     sum += deger;
// // }
// // console.log(sum);

// // const numbers = [65, 44, 12, 4];
// // numbers.forEach(myFunction)

// // function myFunction(a, b, c) {
// //   c[b] = a * 10;
// // }
// // console.log(numbers);


// let sonuc = null;

// // filter() , bir testi geçen dizi öğeleriyle yeni bir dizi oluşturur.

// sonuc = students.filter(item => (item.yasi > 18 && item.cinsiyeti == 'k') );
// console.log(sonuc);
// console.log("--------------------------");

// let denemeSonuc = students.filter(i=>i.cinsiyeti=='e');
// console.log(denemeSonuc);
// console.log("--------------------------");

// // find() , bir test işlevinden geçen ilk dizi öğesinin değerini döndürür.

// sonuc = students.find(item => item.cinsiyeti == 'e');
// console.log(sonuc);
// console.log("--------------------------");

// // findIndex() , bir test işlevinden geçen ilk dizi öğesinin dizinini döndürür.

// sonuc = students.findIndex(item => item.adi == 'Osman');
//  console.log(sonuc);
//  console.log("--------------------------");

//  // every() , tüm dizi değerlerinin bir testi geçip geçmediğini kontrol eder. Boolean değer döndürür.

//  sonuc = students.every(item => item.bolum == 'mimarlik');
//  console.log(sonuc);
//  console.log("--------------------------");

//  // some() , bazı dizi değerlerinin bir testi geçip geçmediğini kontrol eder. Boolean değer döndürür.

// sonuc = students.some(item => item.yasi >= 61);
// console.log(sonuc);
// console.log("--------------------------");

// const cars = ["BMW", "Volvo", "Mini"];

// const sayilar = [4, 12, 45, 123, 21];

// // sort() , bir diziyi alfabetik olarak sıralar.

// console.log(cars.sort());
// console.log("--------------------------");

// sonuc = sayilar.sort((a, b) => (a - b)); // küçükten büyüğe
//  console.log(sonuc);
// console.log("--------------------------");
//  sonuc = sayilar.sort((a,b) => (b - a)); // büyükten küçüğe
//  console.log(sonuc);
// console.log("--------------------------");

// // reverse() , bir dizideki öğeleri tersine çevirir.

// sonuc = sayilar.reverse();
// console.log(sonuc);
// console.log("--------------------------");

// // includes() , dizide bir öğenin olup olmadığını kontrol etmemizi sağlar. Boolean değer döndürür.

// console.log(sayilar.includes(45));
// console.log("--------------------------");




// // map(), her dizi öğesinde bir işlev gerçekleştirerek yeni bir dizi oluşturur.

// sonuc = students.map(item => {
//     return {
//         // id:item.id,
//         // adi:item.adi,
//         ...item, // butun diziyi almak için
//         egitimSuresi:item.bitirmeTarihi - item.baslamaTarihi
//     }});

//  console.log(sonuc);
//  console.log(students);
//  console.log("--------------------------");



 //const say = [4, 12, 45, 123, 21];
 // reduce() , tek bir değer üretmek (azaltmak) için her dizi öğesinde bir işlev çalıştırır. 

// sonuc = say.reduce((total , value) => {
//     return total = total + value
// });
// console.log(sonuc);
// console.log("--------------------------");


// accumulator ya da acc olarak da görebiliriz . (toplayıcı)
// sonuc = students.reduce((accumulator , item) => {
//     accumulator = accumulator + item.yasi;
//     return accumulator;
// }, 0);
// console.log("Yas Ortalaması = " + sonuc/students.length);
// console.log("--------------------------");

// reduce() , gruplama yapmak için de kullanılabilir.

// const bolumGruplama = students.reduce((acc , item) => {
//     if(acc[item.bolum]){
//         acc[item.bolum]++;
//     }else {
//         acc[item.bolum] = 1;
//     }
//     return acc;
// }, {});
// console.log(bolumGruplama);
// console.log("--------------------------");

// console.log(bolumGruplama);

let arabalar = [ 
    {model:'volkswagen','color':'red'},
    {model:'mercedes','color':'blue'},
    {model:'toyota','color':'black'},
    {model:'skoda','color':'red'},
    {model:'hyundai','color':'red'},
    {model:'hyundai','color':'blue'}
];

let renkGruplama = arabalar.reduce((acc, item) => {
    // if(acc[item.color]){
    //     acc[item.color] ++ ;
    // }else {
    //     acc[item.color] = 1;
    // }
    (acc[item.color] = acc[item.color] || []).push(item);
    return acc;
}, {});

console.log(renkGruplama);

let gruplama = students.reduce((acc, item) => {
    (acc[item.bolum])? acc[item.bolum]++ : acc[item.bolum] = 1;
    return acc;
}, {})
console.log(gruplama);

