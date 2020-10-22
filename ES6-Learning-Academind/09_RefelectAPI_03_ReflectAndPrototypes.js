class Person {
  constructor() {
    this.name = "Kanu";
  }
}

let person = new Person();

Person.prototype.age = 27;
console.log(Reflect.getPrototypeOf(person)); //{age: 27, constructor: ƒ}
console.log(Reflect.getPrototypeOf(person) == Person.prototype); //true;
let proto = {
  age: 30
};
Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person)); //{age: 30}
