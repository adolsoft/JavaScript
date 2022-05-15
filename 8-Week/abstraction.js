function Circle(radius) {
    this.radius = radius;
  
    let defautLocation = {
      x: 1,
      y: 3,
    };
  
    //   this.getDefaultLocation = function () {
    //     return defautLocation;
    //   };
  
    //   this.setDefaultLocation = function (value) {
    //     defautLocation = value;
    //   };
  
    this.ciz = function () {
      console.log("defaultLocation", defautLocation);
      console.log("daire cizildi.");
    };
  
    Object.defineProperty(this, "defautLocation", {
      get: function () {
        return defautLocation;
      },
      set: function (value) {
        if (!value.x || !value.y) throw new Error("bu deger olmaz");
        defautLocation = value;
      },
    });
  }
  
  const circle = new Circle(5);
  
  console.log(circle);
  circle.defautLocation = "aödlksjasökld";
  console.log(circle.defautLocation);
  
  // circle.defautLocation = true;
  
  // console.log(circle.ciz());
  // console.log(circle.getDefaultLocation());
  
  // circle.getDefaultLocation = () => "hacklendiniz";
  
  // circle.setDefaultLocation({ x: 19, y: 78 });
  
  // console.log(circle.getDefaultLocation());