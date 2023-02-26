const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Tüm isimlerin dizisini al
// nameList = characters.map((character) => character.name);
// console.log(nameList);

//2. Tüm yüksekliklerin dizisini al
// heigList = characters.map((character) => character.height);
// console.log(heigList);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
// nameHeihtListe = characters.map((character )=> {
//     return { 
//         'name':character.name,
//         'height':character.height
//     }
// })

//console.log(nameHeihtListe);

//4. Tüm ilk isimlerin dizisini al




//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
// totalMass = characters.reduce((acc, character) => {
//     return acc + character.mass
// }, 0)

// console.log(totalMass);

//2. Tüm karakterlerin toplam yüksekliğini alın

// totalHigth = characters.reduce((acc, character) => {
//     return acc + character.height
// }, 0)

// console.log(totalHigth);

//3. Göz rengine göre toplam karakter sayısını alın

// gozRengiGrupla = characters.reduce((total, character) => {
//     if  (total[character.eye_color] == undefined) {
//         total[character.eye_color] = 1
//     } else {
//         total[character.eye_color] +=1
//     }
//     return total
// }, {})

// console.log(gozRengiGrupla);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın

// sumOfCharacterNameLength = characters.reduce((total, character) => {
//     return total + character.name.length
// },0)
// console.log(sumOfCharacterNameLength);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

// listMAssOver100 = characters.filter(character => character.mass > 100);
// console.log(listMAssOver100);

//2. 200'den az yüksekliğe sahip karakterler alın

// listHigthLess200 = characters.filter(character => character.height < 200);
// console.log(listHigthLess200);

//3. Tüm erkek karakterleri al

// listOfGenderMAle = characters.filter(character => character.gender == 'male');
// console.log(listOfGenderMAle);


//4. Tüm kadın karakterleri al

// listOfGenderFemale = characters.filter(character => character.gender == 'female');
// console.log(listOfGenderFemale);


//***SORT*** mevcut diziyi değiştirir
//1. Kütleye göre sırala

// characters.sort((a, b) => {
//     return a.mass - b.mass
// })

// console.log(characters);

//2. Yüksekliğe göre sırala

// characters.sort((a, b) => {
//     return a.height - b.height
// })

// console.log(characters);

//3. İsme göre sırala

// characters.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     } else if (a.name > b.name) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(characters);

//4. Cinsiyete göre sırala


// characters.sort((a, b) => {
//     if (a.gender < b.gender) {
//         return -1
//     } else if (a.gender > b.gender) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(characters);

//***EVERY***
//1. Her karakterin mavi gözleri var mı?

// hasEveryCharacterHasBlueEyes = characters.every(character => character.eye_color == 'blue')
// console.log(hasEveryCharacterHasBlueEyes);

//2. Her karakterin kütlesi 40'tan fazla mı?

// hasEveryCharacterHasOver40 = characters.every(character => character.mass > 40)
// console.log(hasEveryCharacterHasOver40);

//3. Her karakter 200'den kısa mı?


// herKarakter200KisaMi = characters.every(character => character.height < 200)
// console.log(herKarakter200KisaMi);


//4. Her karakter erkek mi?


// herKarakterErkekMi = characters.every(character => character.gender == 'male')
// console.log(herKarakterErkekMi);


//***SOME***
//1. En az bir erkek karakter var mı?

// enAzBirErkekVarMi = characters.some(character => character.gender == 'male')
// console.log(enAzBirErkekVarMi);

//2. Mavi gözlü en az bir karakter var mı?

// maviGozluBirKarakter = characters.some(character => character.eye_color == 'blue')
// console.log(maviGozluBirKarakter);

//3. 210'dan uzun en az bir karakter var mı?

// karakter210Uzun = characters.some(character => character.height > 210)
// console.log(karakter210Uzun);

//4. Kütlesi 50'den az olan en az bir karakter var mı?


kutlesi50AzOlan = characters.some(character => character.mass < 50)
console.log(kutlesi50AzOlan);