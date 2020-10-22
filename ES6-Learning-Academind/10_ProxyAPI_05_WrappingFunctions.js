function log(message) {
  console.log("Log Entry Created, message: " + message);
}
let handler = {
  apply: function(target, thisArg, argList) {
    if (argList.length == 1) {
      return Reflect.apply(target, thisArg, argList);
    }
  }
};

let proxy = new Proxy(log, handler);
proxy("hello"); //Log Entry Created, message: hello
proxy("hello", 10); // Nothing will be printed
