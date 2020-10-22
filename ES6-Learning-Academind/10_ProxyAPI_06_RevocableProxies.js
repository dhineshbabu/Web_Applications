let person = {
  name: "Kanu"
};

let handler = {
  get: function(target, property) {
    return Reflect.get(target, property);
  }
};
let { proxy, revoke } = Proxy.revocable(person, handler); // returns an object
console.log(proxy.name); //Kanu
revoke();
console.log(proxy.name); //TypeError: Cannot perform 'get' on a proxy that has been revoked
