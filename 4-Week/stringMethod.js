//STRIN METHODLAR

// lenght bir stringin uzunluğunu döndürür.

const fruits = "Muz, Portakal, Elma, Cilek, Karpuz";

console.log(fruits.length);

// slice(), bir stringin bir bölümunu cıkarı ve cıkarılan bolumu yeni bir stringe dondurur.
// 2 parametre alır : başlangıç konum ve bitiş konumu 

console.log(fruits.slice(5,14));
// bir parametre negatig ise konum dizenin sonunda sayılır.
//console.log(fruits.slice(-10,-5));

console.log(fruits.substring(5, 14));

//substr(),

console.log(fruits.substr(5, 14));

//replace() , belirtilen bir degeri bir stringteki başka bir değişkenle değiştirme
// yalnızca ilk eşlecen degerini değitirir.
// yeni bir string dondurur.


let text = "Please visit Microsoft and Microsoft";
console.log(text);
console.log(text.replace("Microsoft", "Apple"));
// ilk parametre 'Microsoft' değitirmek istedigimiz degerin secimi,
// ikinci parametreye ise  neyle değiştirmek istediğimiz.

console.log(fruits.replace("Cilek", "Armut"));

//tümö eşleşmeleri değiştirmek istiyorsak /g bayrak seti kullanmamız gerekiyor

console.log(text.replace(/Microsoft/g, "Apple"));

console.log(text); 

//concat (), iki daha fazla stringi birleştirir.

console.log(fruits.concat(", Kavun", ", Ayva"));

//charAt() bir stirngin belirtilen konumumdaki degeri dondurur.

console.log(fruits.charAt(1));
















