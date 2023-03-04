function calistir(callbackFonk){
    setTimeout(function(){
        console.log("Araba  calitir.");
        callbackFonk("ahmet");
    }, 2000);
}

function calistir2(deger){
    console.log(deger + " gaza bas ");
}

calistir(calistir2);
//calistir2("ahmet");

/*******************************************************************************/

function sayi(sayi,callbackFonk){
    if(sayi%2==0){
        callbackFonk("Sayi Çift");
    }
    else{
        callbackFonk("Sayi Tek");
    }
  }

var deger = 8;
sayi(deger,deneme);

function deneme(deger){alert(deger);}

/****************************************************************************/
/* Örneğimizi açıklayacak olursak ; posts adında bir array’e sahibiz ve object tipinde elemanları var. getPosts( ) ve createPost( ) adında iki tane fonksiyonumuz var.  */

const posts = [
    { title : 'Post One', body: 'This is post one'},
    { title : 'Post Two', body: 'This is post two'}
]

/* getPosts( ) içerisinde bir setTimeout fonksiyonu var ve posts array’ndeki değerler map edilerek 1 sn sonra console’a yazılır. */

const getPosts = () => {
    setTimeout (() => {
        posts.map((item, index) => {
            console.log(index, item)
        })
    }, 1000)
}

/*  createPost( ) fonksiyonu ise post adında bir parametre alır ve içerisinde ki setTimeout fonksiyonundan dolayı 3 sn sonra posts array’ne yeni değeri push eder.*/

const createPost_İlkHali = (post) => {  //_İlkHali  sill  aşağıdaki createPost fonksiyonu devre dışı bırak
    setTimeout(()=>{
        posts.push(post)
    }, 3000)
}

// aşağıda tekrar cagrıldığı için bunlar iptal edildi 
//createPost({title : 'Post Three', body: 'This is post Three'}) 

//getPosts()

/*  Çıktıda görüldüğü üzere createPost( ) fonksiyonu çağrılmasına rağmen posts array’ine eklenen bir değer gözükmüyor. Çünkü createPost( ) fonksiyonu 3 sn sonra push ederken getPosts( ) fonksiyonu 2sn sonra değerleri console’a yazdırmış oluyor ve eklenen yeni değer böylelikle eklenmiş olmuyor. Tam da burada callback devreye giriyor ve kodumuzu şu hale çeviriyoruz. */

const createPost = (post, callback) => {
    setTimeout(()=>{
        posts.push(post)
        callback()
    }, 3000)
}

createPost({title : 'Post Three', body: 'This is post Three'}, getPosts)

/* createPost( ) fonksiyonuna callback adında ikinci bir parametre verip onu içerisinde çağırıyoruz. createPost( ) fonksiyonun kullanımında da eklenen değerin yanına ikinci bir parametre olarak getPosts( ) fonksiyonu gönderiliyor.Burada getPosts( ) fonksiyonu callback function oluyor. Ve çıktığımız son durumda şöyle oluyor.*/