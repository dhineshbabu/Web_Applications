class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /* get name() {
          return _this.name;
        }*/
}

let person = new Person("Kanu", 3);
//console.log(person.name); //Kanu
console.log(Reflect.get(person, "name")); //Kanu. Reflect way of getting the name from person object
Reflect.set(person, "name", "Dhinesh");
console.log(Reflect.get(person, "name")); //Dhinesh

class Person1 {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let mum = {
  _name: "mum"
};

let person1 = new Person1("Kanu", 3);
console.log(Reflect.get(person1, "name", mum)); //mum. Forcing this to refer mum object
Reflect.set(person1, "name", "Bru", mum);
console.log(Reflect.get(person1, "name", mum)); //Bru
console.log(Reflect.has(person1, "name")); //True
console.log(Reflect.ownKeys(person)); //["name", "age"]

//Adding property to the object
let person2 = new Person("Kanu", 3);
Reflect.defineProperty(person2, "hobbies", {
  writable: false,
  value: ["Playing", "sleeping"]
});
person2.hobbies = ["Nothing"];
console.log(person.hobbies); // ["Playing", "sleeping"]. Because writable is false

//Deleting a property from an object
Reflect.deleteProperty(person2.hobbies);
console.log(person.hobbies); //undefined

//Object Extension Prevention
Reflect.preventExtensions(person2);
Reflect.defineProperty(person2, "runSpeed", {
  writable: false,
  value: "10kmph"
});
console.log(person2.runSpeed); //undefined. Since we marked the prevent extension
console.log(Reflect.isExtensible(person2)); //false
