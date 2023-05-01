const target = {
    message: 'Merhaba, Dünya!'
  };
  
  const handler = {
    get: function (mess, messDeger) {
      return mess[messDeger].toUpperCase();
    }
  };
  
  const proxy = new Proxy(target, handler);
  

  console.log(target); 
  console.log(proxy.message); // "MERHABA, DÜNYA!"