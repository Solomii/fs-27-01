"use strict";

// function logPerimetrFidure(figure){
//   if(figure instanceof Figure) {
//     console.log(figure.name, "periment = ", figure.getPerimetr())
//     return;
//   }
//   throw new TypeError("instance must be extends Figure")
// }

// class Figure {
//     constructor(name) {
//       if(this.constructor === Figure) {
//         throw new Error("Not create instance from Figure!")
//       }
//         this.name = name;
//     }
//     getPerimetr() {}
//     getArea() {}
// }

// class Circle extends Figure {
//   constructor() {
    
//   }
//   getPerimetr() {
     
//   }
//   getArea() {
    
//   }
// }

// class Square extends Figure {
//     constructor() {
      
//     }
//     getPerimetr() {
       
//     }
//     getArea() {
      
//     }
// }

// class Triangular extends Figure {
//     constructor(a, b, c) {
//         super("triangular");
//         this.setSides(a,b,c)
//     }

//     setSides(a, b, c) {
//       if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
//         throw new TypeError("side a must be number!");
//     }

//     if (a <= 0 || b <= 0 || b <= 0) {
//         throw new RangeError("side a can't be negative");
//     }


//         if (a + b > c && b + c > a && a + c > b) {
//             this._a = a;
//             this._b = b;
//             this._c = c;
//             return;
//         }
//         throw new RangeError("side must be rigth")
//     }

//     get a() {
//         return this._a;
//     }

//     get b() {
//       return this._b;
//   }

//   get c() {
//     return this._c;
// }

   

//     getPerimetr() {
//         return this._a+this._b+this._c;
//     }

//     getArea() {
//       //formula Geruna
//   }
// }

// const figure3 = new Triangular(3,4,5)
// console.log(figure3.getPerimetr())
// logPerimetrFidure(figure3)



//!!!! псевдокод !!!!!
class Button {
  constructor(){
  }
  creatButton ()
}

class WinButton extends Button {
  constructor(){
    super()
  }
  createButton() {}
  // realization at windows
}

class UnixButton extends Button {
  constructor(){
    super()
  }
  createButton() {}
  // realization at unix
}

class MacButton extends Button {
  constructor(){
    super()
  }
  createButton() {}
  // realization at mac
}

class OSFactory {
  creatButton(){}
  creatPanel(){}
}

class WinOSFactory extends OSFactory{
  creatButton(){
    return new WinButton()
  }
}

class UnixOSFactory extends OSFactory{
  creatButton(){
    return new UnixButton()
  }
}

class MacOSFactory extends OSFactory{
  creatButton(){
    return new MacButton()
  }
}

class WinOSFactory extends OSFactory{
  creatPanel(){
    return new WinPanel()
  }
}

class UnixOSFactory extends OSFactory{
  creatPanel(){
    return new UnixPanel()
  }
}

class MacOSFactory extends OSFactory{
  creatPanel(){
    return new MacPanel()
  }
}

class Studio {
  render(OS) {
    switch (OS){
      case"windows":{
     this._factory = new WinOSFactory()
      }
      case"unix":{
        this._factory = new UnixOSFactory()
      }
      case"mac":{
        this._factory= new MacOSFactory()
      }
      default:break;
    }
    const button = this._factory.creatButton();
    const panel = this._factory.creatPanel()
  }
}
