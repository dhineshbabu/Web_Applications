let set = new WeakSet([{ a: 1 }, { b: 2 }, { b: 2 }]); // Weak set only stores objects as values so that we can enable garbage collection
console.log(set); // WeakSet {{…}, {…}, {…}}
//Also we can not loop through the weakset
console.log(set.has({ b: 2 })); //false. Only pointers are getting stored

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let set1 = new WeakSet([obj1, obj2, obj2]);
console.log(set1.has(obj2));
set1.add(obj1);
console.log(set1); //{{…}, {…}} . Duplicates references will be removed here
