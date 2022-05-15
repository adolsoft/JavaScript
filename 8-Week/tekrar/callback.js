//const birinci = () => console.log('birinci');


const ikinci = (calisacak) => {
    setTimeout(() => {
        console.log('ikinci');
        calisacak();
    }, 2000);
}

const ucuncu = () => {
    setTimeout(() => {
        console.log('ucuncu');
       
    }, 1000);
}



ikinci(ucuncu);