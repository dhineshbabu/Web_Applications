let person = {
  age: 3,
  name: "Kanu"
};

let handler = {};

let protoHandler = {
  //handler can be used on any object since it is generic
  get: function(target, name) {
    return name in target ? target[name] : "Non Existant";
  }
};

let proxy = new Proxy({}, handler);
let protoProxy = new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(person, protoProxy);
console.log(person.hobbies); //"Non Existant"
