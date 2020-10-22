//Trap is an intermediate thing to get the value from the object. Like a proxy in the servers
let person = {
  age: 3
};

let handler = {
  //handler can be used on any object since it is generic
  get: function(target, name) {
    return name in target ? target[name] : "Non Existant";
  }
};

var proxy = new Proxy(person, handler);
console.log(proxy.age); // 3
console.log(proxy.name); //"Non Existant"
