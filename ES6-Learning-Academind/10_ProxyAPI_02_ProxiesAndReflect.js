//Trap is an intermediate thing to get the value from the object. Like a proxy in the servers
let person = {
  age: 3,
  street: "Hopes"
};

let handler = {
  //handler can be used on any object since it is generic
  get: function(target, name) {
    return name in target ? target[name] : "Non Existant";
  },
  set: function(target, property, value) {
    if (value.length >= 2) {
      Reflect.set(target, property, value);
    }
  }
};

var proxy = new Proxy(person, handler);
console.log(proxy.age); // 3
console.log(proxy.name); //"Non Existant"
proxy.street = "M";
console.log(proxy.street); //Hopes because of the condition, it wont change the street property
proxy.street = "Balan Nagar";
console.log(proxy.street); //Balan Nagar.
