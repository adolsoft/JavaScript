

// calback 



const birinci = (sonrakiIslem) => {
    setTimeout(()=> {
        console.log("ilk foksiyon calisti")
        sonrakiIslem()
    }, 3000)
    
}

const ikinci = () => {
    setTimeout(()=> {
        console.log("ikinci foksiyon calisti")
    }, 2000)
    
}

birinci(ikinci);
//ikinci();

