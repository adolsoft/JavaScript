// DOM - Document Object Model

// Seçim Yöntemleri

// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByName;
// document.getElementsByTagName;

// document.querySelector;
// document.querySelectorAll;

let js = document.getElementById("result");
console.log(js);
alert(js.innerHTML);

let sinifSecimi = document.getElementsByClassName("color");
console.log(sinifSecimi);

for (let index = 0; index < sinifSecimi.length; index++) {
  console.log(sinifSecimi[index].innerHTML);
}

let tekSinifSecimi = document.getElementsByClassName("library");
console.log(tekSinifSecimi);

let nameSecimi = document.getElementsByName("resultName");

for (let index = 0; index < nameSecimi.length; index++) {
  console.log(nameSecimi[index].innerText);
}

let tagSecimi = document.getElementsByTagName("p");

for (let index = 0; index < tagSecimi.length; index++) {
  console.log(tagSecimi[index].innerText);
}

let idIleSecim = document.querySelector("#result");

console.log(idIleSecim.innerHTML);

let sinifIleSecim = document.querySelector(".library");

console.log(sinifIleSecim.innerHTML);

let result = document.querySelectorAll(".color");

for (let index = 0; index < result.length; index++) {
  console.log(result[index].innerHTML);
}

let isimSecimi = document.querySelectorAll("[name=resultName]");

console.log(isimSecimi);