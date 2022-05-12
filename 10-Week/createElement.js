let div1 = document.createElement("div");
div1.className = "container";

let div2 = document.createElement("div");
div2.className = "row";

let div3 = document.createElement("div");
div3.className = "col-md-1";

let button = document.createElement("button");
button.type = "button";
button.className = "btn btn-primary";
button.innerText = "Buton";
//button.setAttribute("id", "degistir");

document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(button);

let div4 = document.createElement("div");
div4.className = "col-md-5 mt-5";

div2.appendChild(div4);

let img = document.createElement("img");
 img.className = "img-fluid";
 img.src =
   "https://pixabay.com/get/g47a67cc3793643ae213739e98a0f46ecfb69ee7eb446bac36e03421b0dfd2c07e8564158052264020cae29794dc0370472b2da9dd0c7f96d3b3c881741f20024dcd4caf7f1aa717eb9a3b6bdb8479405_1920.jpg";
 img.style.height = "475px";
 div4.appendChild(img);

 button.addEventListener("click", () => {
   img.src =
     "https://pixabay.com/get/ga75d8686e2c808e2a433297245c7cee8f8620583647bb4b30405a0c8fb4a06d4e13c7677c8c2aeea3c5bef353483aef7706002e627c200f66ce1e20aeb59dfd193b01781960eaee615dcc00ef463af4b_640.jpg";
 });