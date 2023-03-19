// Abstraction 
function DvdPlay(brand) {
    this.marka = brand;
   // this.powerSupply = {
    const powerSupply = {
        input: '200V',
        cikis: '5V',
    }
    this.play = function() {
        console.log("dvd calisisyor ");
    }
}

const dvd = new DvdPlay("sony");

dvd.powerSupply = {
    input: '220V',
    cikis: '40V',
}