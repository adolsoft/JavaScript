const students = [
    { id: 1, adi: 'Murat', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 21, baslamaTarihi: 2010, bitirmeTarihi: 2014,  },
    { id: 2, adi: 'Ahmet', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 32, baslamaTarihi: 2000, bitirmeTarihi: 2006 },
    { id: 3, adi: 'Mahmut', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 18, baslamaTarihi: 1999, bitirmeTarihi: 2008 },
    { id: 4, adi: 'Senem', cinsiyeti: 'k', bolum: 'mühendislik', yasi: 45, baslamaTarihi: 1993, bitirmeTarihi: 1997 },
    { id: 5, adi: 'Osman', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 61, baslamaTarihi: 1980, bitirmeTarihi: 1988 },
    { id: 6, adi: 'Emine', cinsiyeti: 'k', bolum: 'iibf', yasi: 17, baslamaTarihi: 2017, bitirmeTarihi: 2021 },
];

// console.log(students[0].adi);
// console.log(students[1].adi);
/***************************************** */
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element);
// }
/****************************************** */

// function izmiYazdir(params) {
//     console.log(params.adi);
// }
// izmiYazdir(students[0]);

// students.forEach(izmiYazdir);

/******************************************** */


// const ismiYazdirArrow = (param) => {console.log(param.adi)};

// students.forEach(ismiYazdirArrow);
// console.log("******************************");
// students.forEach((param) => {console.log(param.adi)});

// students.forEach((param) => {
//     console.log(param.adi)
//     console.log(param.cinsiyeti)

// });

/**************************************** */

// mixedArray = [5, 'a']
// mixedArray.forEach((x)=>{console.log(typeof x)});

/*********************************** */

// FILTER
//cinsiyeti erkek olanları fitreleri  yeni bir array dondurur
// filteredStudents = students.filter((student) => student.cinsiyeti === 'e' );
// console.log(filteredStudents);

/*********************************** */

// FIND
// ilk bulduğı degeri donuyor.

// findStudent = students.find((student)=> student.id === 3 );
// console.log(findStudent);
// findStudent2 = students.find((student)=> student.id === 18 );
// console.log(findStudent2);
// console.log('-----------------')

// over15andMaleStudents = students.filter((student) => student.yasi > 20 && student.cinsiyeti === 'e');
// console.log(over15andMaleStudents);
// console.log('-----------------')

/************************************* */

// FINDINDEX

// foundStudentIndex = students.findIndex((student)=> student.id === 3);
// console.log(foundStudentIndex);


// foundStudentIndexNegatif = students.findIndex((student) => student.id === 30);
// console.log(foundStudentIndexNegatif);

/*************************************** */

// EVERY
// dizideki tum elemanlar kosulu saglaması durumunda true dondurur
// allStudentsOver15 = students.every((student) => student.yasi > 15);
//  console.log(allStudentsOver15);

// allStudentsOver18 = students.every((student) => student.yasi > 18);
//  console.log(allStudentsOver18);

// allStudentsOver15 = students.every((student) => student.yasi > 15 && student.yasi < 62);
//  console.log(allStudentsOver15);

// allStudentsOver15andMale = students.every((student) => student.yasi > 15 && student.cinsiyeti === 'e');
// console.log(allStudentsOver15andMale);

// allStudentsMale = students.every((student) => student.cinsiyeti === 'e');
// console.log(allStudentsMale);

/********************* */

//some
// dizideki en az bir elemanin kosulu saglamasi durumunda true dondurur
// function testOver15(student) {
//     return student.yasi > 15;
// }
// isThereAnyStudentOver15fonksiyon = students.some(testOver15);
// console.log(isThereAnyStudentOver15fonksiyon);

//  console.log(students.some(testOver15))

// isThereAnyStudentOver15 = students.some((student) => student.yasi > 15);
// console.log(isThereAnyStudentOver15);

// isThereAnyStudentOver15Negatif = students.some((student) => student.yasi > 90);
// console.log(isThereAnyStudentOver15Negatif);

// function someByAgeGreater(liste, age) {
//     return liste.some((item) => item.yasi > age)
// }

//  console.log(someByAgeGreater(students, 90));

 /************************************* */

// SORT 
// alfabatik veya bir fitreye gore sıralama yapıyor
// sort diziyi değiştiriyor.

const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];

// const sayilar = [4, 12, 45, 4, 123, 21];

// console.log(cars.sort());

// console.log(sayilar.sort());

// console.log(sayilar.sort((a, b) => a - b));

// console.log(sayilar.sort((a, b) => b - a));

// console.log(sayilar);//sort diziyi değiştiriyor.

// console.log(students.sort((a, b) => a.yasi - b. yasi));

/*************************************************** */


// includes
// dizide aranan eleman varsa true yoksa false dondurur
// console.log(cars.includes('BMW'));

// console.log(cars.includes('bmw'));

/******************************************* */


// MAP  
// dizideki her eleman icin belirtilen islemi yapar ve yeni bir dizi olusturur

// mappedStudentsNames = students.map((student) => {
//     return {adi: student.adi}
// });

//  console.log(mappedStudentsNames);

//  mappedStudentsNamesAndId = students.map((student) => {
//     return {
//         adi: student.adi, 
//         id: student.id
//     }
//  });
 
//  console.log(mappedStudentsNamesAndId);

//  console.log("--------------------")

 
// studentStudyYears = students.map((student) => {
//     return {
//         adi: student.adi,
//         okulYili: student.bitirmeTarihi - student.baslamaTarihi
//     }
// });

//  console.log(studentStudyYears);
//  console.log("--------------------")
//  console.log(students);

//  console.log("--------------------")
// studentsWithStudyYears = students.map((student) => {
//     return {
//         ...student,
//         okulYili: student.bitirmeTarihi - student.baslamaTarihi
//     }
// });

//  console.log(studentsWithStudyYears);
//  console.log("--------------------")
//  console.log(students);

 /****************************** */

 // REDUCE

//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  sonuc = numbers.reduce((total, number) => 
//      {return total + number} 
//  , 0); // ilk başlama degeri
 
//  console.log(sonuc);

 
// studentTotalAge = students.reduce((toplamYas, student) => {
//     return toplamYas + student.yasi
// }, 0);

// console.log(studentTotalAge)


// avarageStudentAge = studentTotalAge / students.length; // yas ortalaması
// console.log(Math.ceil(avarageStudentAge)); //yuvarlar.

/********************************************* */


// reduce gruplama

// bolumler = {'mimarlik':2, 'muhendislik': 3} ekranda boyle birsey istersek aşağıdaki reduce

bolumSayilari = students.reduce((bolumler, student) => {
    if (bolumler[student.bolum]){
        bolumler[student.bolum]++;
    } else {
        bolumler[student.bolum] = 1;
    }
    return bolumler;
}, {});

console.log(bolumSayilari);


2.39.56 saniyeden videoyu tekrar izle 