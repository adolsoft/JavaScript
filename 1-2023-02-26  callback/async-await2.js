/*
Async/Await yapısı asenkron işlemleri daha anlaşılması kolay bir hale getiren Promise tabanlı Javascript özelliğidir.
Kullanılacak fonksiyonun başına async ifadesi kullanılarak fonksiyon içerisinde asenkron bir işlem olacağı bildirilir. Await ifadesinin kullanıldığı fonksiyon geriye promise nesnesi döndürmelidir. Await sadece async ile tanımlanmış bir fonksiyon içerisinde kullanılabilir.
*/


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

async function init() {
    await createPost({title : 'Post Three', body: 'This is post Three'})
    getPosts()
}

//init()


/* Yukarıda bahsettiğimiz özelliklere göre örneğimizi inceleyecek olursak init( ) fonksiyonumuzun başına async ifadesini ekledik. createPost ( ) fonksiyonun başına da await ekledik ve böylelikle bu fonksiyondan yanıt almadan diğer fonksiyona geçmemiş olacak. Buradan yanıt geldikten sonra getPosts( ) fonksiyonu ile tüm post’ları yazdırmış olduk.
*/

/* Aşağıdaki kod promise yapısında yukarıda kod await yapısında 
createPost({title : 'Post Three', body: 'This is post Three'})
        .then(getPosts)
        .catch( err => console.log(err))

*/

/************************************************************************************** */

async function fetchUser() {
    const user = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await user.json()
    console.log(data)
}

//fetchUser()

/****************************************************************************** */

ilk = () => {
    const promise1 = new Promise((resolve, reject) => setTimeout(resolve,5000, 'İlk'))
    return promise1; 
}

ikinci = () => {
    const promise2 = new Promise((resolve, reject) => setTimeout(resolve,3000, 'ikinci')) 
    return promise2
}

ucuncu = () => {
    const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000, 'ucuncu')) 
    return promise3
}

dorduncu = () => {
    const promise4 = new Promise((resolve, reject) => setTimeout(resolve,1000, 'dorduncu'))
    return promise4
}

fetchUser = () => {
    const promise5 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())
    return promise5
}



//Promise.all([promise5,promise2,promise3,promise4,promise1]).then(values => console.log(values)) // promise sıraya koyuyor.


getSira = async () => {
    try {
        const result1 = await ilk();
        const result2 = await ikinci();
        const result3 = await ucuncu();
        const result4 = await dorduncu();
        const result5 = await fetchUser();
        console.log(result1);
        console.log(result2);
        console.log(result3);
        console.log(result4);
        console.log(result5);
    } catch (e) {
       return console.log(e); 
    }
}

getSira();