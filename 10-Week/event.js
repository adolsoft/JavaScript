// events

function tikla() {
    
   // alert("Butona tıklandı");
    console.log("ikinci fonksiyon");
  }
  
  // addEventListener
  
  let buton = document.querySelector("#buton");
  
  buton.addEventListener("click", () => {
     console.log("Butona tiklandi");
   tikla();
 });
  
  // buton.addEventListener("mouseover", () => {
  //   buton.innerHTML = "değişti";
  // });
  
  buton.addEventListener("click", () => {
    let h1 = document.querySelector("#baslik");
    
    h1.style.color = "red";

    h1.style.display = "none";
    document.body.removeChild(h1);
  });