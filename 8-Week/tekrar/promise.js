// promise



// promislerin yazılması
//https://jsonplaceholder.typicode.com/guide/    asagıdaki veritabanı bu si,teden geldi
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const loginOldumu = true;


  const promise_1 = () => {
    const result = new Promise((resolve, reject) => {
      if(loginOldumu) {
        resolve('login basarılı');
      } else {
        reject('login BASARISIZ');
      }
      
    });
    return result;
  };

  const makalesiVarmi = false;

  const promise_2 = () => {
    const result = new Promise((resolve, reject) => {
      if(makalesiVarmi) {
        resolve('makaleler yüklendi');
      } else {
        reject('makalesi YOK');
      }
      
    });
    return result;
  };


  promise_1()
  .then(sonuc => {
    console.log(sonuc);
    promise_2()
    .then(makaleSonuc => {
      console.log(makaleSonuc);
    })
    .catch(makaleSonuc => {
      console.log(makaleSonuc);
    });
  })
  .catch(error => {
    console.log(error);
  });





//promislerin calısştırıması
// senkron calıstıracagız
//sıraya sokulması