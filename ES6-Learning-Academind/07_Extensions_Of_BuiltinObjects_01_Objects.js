//063 - Objects

var obj1 = {
  a: 1
};

var obj2 = {
  b: 2
};

var obj = Object.assign(obj1, obj2);
console.log(obj); //{a: 1, b: 2}

class Obj1 {
  constructor() {
    this.a = 1;
  }
}

class Obj2 {
  constructor() {
    this.b = 2;
  }
}

var c1 = new Obj1();
var c2 = new Obj2();
var classObject = Object.assign(c1, c2);
console.log(c2 instanceof Obj1); //false
console.log(c2 instanceof Obj2); //true
console.log(classObject.__proto__ === Obj1.prototype); //true
console.log(classObject.__proto__ === Obj2.prototype); //false

//we can also pass an empty object
var emptyOject = Object.assign({}, c1, c2);
console.log(classObject.__proto__ === Object.prototype); //true since we are adding to the empty object

let person = {
  name: "Kanu"
};

let daughter = {
  name: "Hasini"
};

console.log(person.__proto__ === Object.prototype); //true
Object.setPrototypeOf(person, daughter);
console.log(person.__proto__ === Object.prototype); //false
console.log(person.__proto__ === daughter); //true
