class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, I am " + this.name);
  }
  greet1(prefix) {
    console.log(prefix + "Hello, I am " + this.name);
  }
}

let person = Reflect.construct(Person, ["Kanu", 3]);
Reflect.apply(person.greet, person, []); //Hello, I am Kanu
Reflect.apply(person.greet, {}, []); //Hello, I am undefined
Reflect.apply(person.greet, { name: "Dhinesh" }, []); //Hello, I am Dhinesh
Reflect.apply(person.greet1, { name: "Dhinesh" }, ["Good Day!!!"]); //Good Day!!!Hello, I am Dhinesh
