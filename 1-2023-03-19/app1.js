console.log("run")

pTaglari = document.getElementsByTagName('p');

const baslik = document.getElementById('baslik');

text1ler = document.getElementsByClassName('text1');

//console.log(text1ler);

//text2ler = document.querySelector('text2')  // bu şekilde boş getirir. tags bulamıyor. Aşağıdaki gibi olması gerekiyor.

text2_birinciEleman = document.querySelector('.text2'); // nokta olursa class olur
console.log(text2_birinciEleman); // burada consol kısmında  boş deger getirir çünkü index.html <script src='app.js'></script> başa yazılmış olabilir. Ya burasını body sonraya alacağız yada <script src='app.js' defer></script> bir süre kendini ertele yazmamız gerekiyor.

//Yukarıdaki text2 cogunu getirmek icin

text2ler = document.querySelectorAll('.text2') // hepsine birden erişim olur nokta . text2 isminde classları getirmek için çağrıldı.
console.log(text2ler)

baslik_id_ile_ilkp = document.querySelectorAll('#ikincibolum > p') // id kısımlarını # işareti ile alıyoruz. // bir alt kısımdaki ilk p alır 

// ikinci bolumdeki  altında ki p geler gelmesi için 
baslik_id_ile = document.querySelectorAll('#ikincibolum p') // altındaki p lerin tamamını getirir.

console.log(baslik_id_ile)

//baslik.innerText = " Yeni Baslik";

rowlar = document.querySelectorAll(".row")
console.log(rowlar)
