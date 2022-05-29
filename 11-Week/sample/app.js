// //datayı alabilmek için
// fetch("./data.json").then((dataGetir)=>dataGetir.json()).then((goster)=>console.log(goster));

const buton = document.querySelector("#veri-oku");
const liste = document.querySelector("#liste");

buton.addEventListener("click", () => {
    //datayı alabilmek için
    fetch("./data.json")
    .then((dataGetir) => dataGetir.json())
    .then((goster) => 
        goster.forEach(element => {
        const satir = document.createElement("tr");
        const hucre1 = document.createElement("td");
        const hucre2 = document.createElement("td");
        const hucre3 = document.createElement("td");

        hucre1.textContent = element.id;
        hucre2.textContent = element.ad;
        hucre3.textContent = element.soyad;

        satir.appendChild(hucre1);
        satir.appendChild(hucre2);
        satir.appendChild(hucre3);

        liste.appendChild(satir);

    }));

});