let person = {
  age: 3,
  name: "Kanu"
};

let handler = {
  //handler can be used on any object since it is generic
  get: function(target, name) {
    return name in target ? target[name] : "Non Existant";
  }
};

var proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy);
console.log(person.hobbies); //"Non Existant"
