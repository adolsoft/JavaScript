     // API -- Application program interface

// JSON -- Javascript Object Notation

/* json içersinde bilgiler şu şekilde saklanabilir
    string 
    number
    array
    obj
    boolean
*/

/* CRUD istekleri
  islem       api
 Creat       post
 Read        get 
 Update      put
 Delete      delete
*/

/*
İşlemler 
     fetch işlemi kullandık
     axios işlemini kullandık
*/

// fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response) => response.json())
//      .then((data) => console.log(data));



// const user = axios.get("https://jsonplaceholder.typicode.com/users");
// user.then((responce) => console.log(responce.data));

// const todo = axios.get("https://jsonplaceholder.typicode.com/todos");
// todo.then((responce)=> console.log(responce.data));

// const newTodo = axios.post("https://jsonplaceholder.typicode.com/todos", {
//     "userId": 1,
//     "id": 1,
//     "title": "yeni kayıt",
//     "completed": false
// })

// newTodo.then((response) => console.log(response));

// const kayitGuncelle = axios.put("https://jsonplaceholder.typicode.com/todos/1",  {
//     "userId": 1,
//     "id": 4,
//     "title": "kayıt güncellendi",
//     "completed": false
// });

// kayitGuncelle.then((getir)=>console.log(getir.data));

// const kayitSil = axios.delete("https://jsonplaceholder.typicode.com/todos/1");
// kayitSil.then((goster)=>console.log(goster));

const degistir = axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
    title: "patch ile güncellendi",
    mesaj:"deneme",
});

degistir.then((res)=> console.log(res));