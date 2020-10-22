class Person {
  constructor(name) {
    this.name = name;
  }
}

function TopObj() {
  this.age = 27;
}

let person = Reflect.construct(Person, ["Dhinesh"]);
console.log(person); //Person {name: "Dhinesh"}
console.log(person instanceof Person); //true
let person1 = Reflect.construct(Person, ["Dhinesh"], TopObj); //TopObj will change the prototype
console.log(person1.__proto__ == TopObj.prototype); //true
