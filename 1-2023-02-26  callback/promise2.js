/*Promise yapısı yukarıda bahsettiğim callback’in neden olabileceği problemleri düzeltmek için ve beklenmeyen durumla karşılaşıldığında hata kontrolünün daha rahat yapılabileceği bir yapıdır.   */

/* Promise’leri new ile tanımlıyoruz ve iki adet parametre alıyorlar.Bunlar başarılı durumda resolve( ) , başarısız durumda reject( ) olan fonksiyonlardır. Eğer işlem başarılı olursa then( ) , başarısız olursa ve hata olursa catch( ) girer.*/


const posts = [
    { title : 'Post One', body: 'This is post one'},
    { title : 'Post Two', body: 'This is post two'}
]


const getPosts = () => {
    setTimeout (() => {
        posts.map((item, index) => {
            console.log(index, item)
        })
    }, 2000)
}

const createPost = (post) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post)
            const error = false

            if(!error) {
                resolve()
            }else {
                reject('Erro : Bir hata oluştu')
            }
        }, 800)
    } )
}

createPost({title : 'Post Three', body: 'This is post Three'})
        .then(getPosts)
        .catch( err => console.log(err))

/* Yukarıda genel olarak bahsettiğimiz syntax yapısını örnek üzerinden inceleyecek olursak ; new keyword’ü ile tanımladık. Daha sonra bu promise resolve( ) , reject ( ) adında iki tane fonksiyon aldı. Error adında bir değişken tanımladık ve if koşulunda başarılı durumda resolve( ) , başarısız durumda reject( ) ‘ e yolladık. createPost ( ) fonksiyonunu kullanırken de hata olmadığında resolve ( ) oluyor ve işlem then( )’e giriyor. Aksi durumlarda reject( ) oluyor ve işlem catch( )’ e giriyor. then( ) içerisindeki getPost( ) fonksiyonu yeni post eklendikten sonra tüm postları çağırıyor ve yeni eklenen post başarılı bir şekilde eklenmiş oluyor. Çıktıda son durumda şöyle oluyor. 
çıktıya ekranda bakkkkkk*/

/******************************************************************************** */

const printOrder = (order) => {
    return new Promise ((resolve, reject) => {
        if(true) {
            setTimeout( () => {
                resolve(),
                console.log(order),
                Math.random * 100 // galiba rastgele bir işlem suresi oluşturuyor.
            })
        } else {
            reject(`${order} - de problem` )
        }
    });
}

const printAll = () => {
    printOrder("1")
    .then(()=>printOrder("2"))
    .then(()=>printOrder("3"))
    .catch((e) => console.log(e))
}

printAll();

console.log("Promois All komutunu cıktısı")
/*************************************************************************** */

/*Promise yapısı ile ilgili promise.all( ) ve promise.race( ) özelliklerinden de bahsetmek istiyorum. Promise.all( ) , birden fazla promise tek bir then( ) ve catch( ) ile yazılabiliyor. Promise’lerden biri reject( ) olursa direk catch( )’e girer. Promise.race( ) ise promise’ler arasından en hızlı olan döner.Örneklerle pekiştirelim. */

const promise1 = new Promise((resolve, reject) => setTimeout(resolve,4000, 'İlk')) //Promise.resolve('Hello')  // bu degerler denendi
const promise2 = new Promise((resolve, reject) => setTimeout(resolve,3000, 'ikinci')) //10   // bu degerler denendi
const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000, 'ucuncu')) //'Example'    /// bu degerler denendi
const promise4 = new Promise((resolve, reject) => setTimeout(resolve,1000, 'Dorduncu'))
const promise5 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise5,promise2,promise3,promise4,promise1]).then(values => console.log(values)) // promise sıraya koyuyor.


