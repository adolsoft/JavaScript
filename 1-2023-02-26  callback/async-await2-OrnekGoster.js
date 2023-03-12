

/****************************************************************************** */

c

birinci = () => {
    
    const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    return promise1
}    
   

ikinci = () => {
    
    const promise2 = fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    return promise2
           
          
   
}

ucuncu = () => {
    
    const promise3 = fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json())
    return promise3
              
      
}

dorduncu = () => {
   
    const promise4 = fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
    return promise4
    
}

besinci = () => {
  
    const promise5 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
    return promise5
            
       
   
}



//Promise.all([promise5,promise2,promise3,promise4,promise1]).then(values => console.log(values)) // promise sıraya koyuyor.


getSira = async () => {
    
    try {
        const result1 = await birinci();
        const result2 = await ikinci();
        const result3 = await ucuncu();
        const result4 = await dorduncu();
        const result5 = await besinci();
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

