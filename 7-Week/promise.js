
const sozVerdik = new Promise(function(resolve, reject){
    let herseyYolunda = true;
    if (!herseyYolunda) {
      resolve('İşlem tamam!');
    } else {
      reject('Bir sıkıntı var...');
    }
  })

  sozVerdik.then(function(cevap){
    console.log(cevap) // 'İşlem tamam!' yazısını basar
  }).catch(function(hata){
    console.log(hata) // 'Bir sıkıntı var...' yazısını basar
  })