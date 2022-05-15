// örnek object
const ornek = {
    radius: 3,
    location: {
      x: 1,
      y: 0,
    },
    ciz: function () {
      console.log("daire cizildi.");
    },
  };
  
  // factory pattern
  const createCircle = function (radius) {
    return {
      radius: radius,
      ciz: function () {
        console.log("daire cizildi.");
      },
    };
  };
  
  const circle = createCircle(4);
  
  // constructor pattern
  function Circle(radius) {
    //   console.log(this);
    this.radius = radius;
    this.ciz = function () {
      console.log("daire cizildi.");
    };
  }
  
  const circle_2 = new Circle(6); // {}
  
  // console.log(circle_2.radius);
  // console.log(circle_2.ciz());
  
  console.log(circle_2);
  
  // circle_2.location = 1;
  // console.log(circle_2);
  
  // delete circle_2.radius;
  // console.log(circle_2);
  
  console.log(circle_2["radius"]);
  circle_2["base-origin"] = 5;
  console.log(circle_2);
  console.log(circle_2["base-origin"]);