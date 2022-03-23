// ARRAY METHODS

// toString() , bir diziyi (virgülle ayrılmış) bir string değere dönüştürür.

const fruits = ["Muz", "Portakal", "Elma", "Çilek", "Karpuz"];
console.log(fruits.toString());
//join() , bir diziyi (belirlediğimiz bir ayıraç ile) dizi değerleri dizisine dönüştürür.

//console.log(fruits.join('*'));
// pop() , dizideki son öğeyi kaldırır ve dışarı atılan öğeyi döndürür.

console.log(fruits.pop());
console.log(fruits);

// shift() , ilk dizi öğesini kaldırır ve dışarı atılan değeri döndürür.

console.log(fruits.shift());
console.log(fruits);

// push(), bir dizinin sonuna yeni bir öğe ekler ve dizinin lenght 'ini döndürür.

console.log(fruits.push('Kivi'));
console.log(fruits);

// unshift() , dizinin başına yeni bir öğe ekler ve yeni dizinin lenght'ini döndürür.

console.log(fruits.unshift('Avokado'));
console.log(fruits);

// concat() , argüman olarak aldığı dizileri veya değerleri birleştirir ve yeni bir dizi oluşturur.

const sebzeler = ["Patlıcan" , "Karnıbahar" , "Domates"];

const manav = fruits.concat(sebzeler);
console.log(manav);
//console.log(manav.concat('Marul'));
//console.log(manav);

// splice() , bir diziye yeni öğeler eklemek için kullanılabilir.
    // İlk parametre (2), yeni öğelerin eklenmesi gereken konumu tanımlar.
    // İkinci parametre (0), kaç öğenin kaldırılması gerektiğini tanımlar .
    // Geri kalan parametreler ("Limon" , "Kivi") eklenecek yeni öğeleri tanımlar .

    console.log(fruits);

fruits.splice(2, 0, 'Limon', 'Kivi');
console.log(fruits);

// splice() , Akıllı parametre ayarıyla, diziden öğeleri kaldırmak için de kullanılabilir.
 fruits.splice(3, 1);
 console.log(fruits);
 // slice() , bir dizinin aldığı argümanlar ile belirli bir parçasını dilimler ve yeni dizi oluşturur.
 const sebetim = fruits.slice(1,4);
 console.log(sebetim);
 
     // İlk parametre (1), dizideki ilk elemanı attı ve geri kalanını aldı.
     // İkinci parametre (4), dizideki 4.elemandan sonrasını attı.(4.eleman dahil değildir.)
     const afruits = ["Banana", "Orange", "Apple", "Mango"];

     afruits.splice(2, 0, "Lemon", "Kiwi");

     console.log(afruits);

     afruits.splice(2, 2);

     console.log(afruits);

     afruits.splice(2, 1, "Lemon", "Kiwi");
     console.log(afruits);