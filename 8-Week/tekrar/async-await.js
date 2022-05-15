
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

  const makalesiVarmi = true;

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

const islem = async () => {
    await promise_1()
    .then((sonuc) => console.log(sonuc))
    .catch(err => console.log(err));

    await promise_2()
    .then((sonuc) => console.log(sonuc))
    .catch((err) => console.log(err))

}

islem();



