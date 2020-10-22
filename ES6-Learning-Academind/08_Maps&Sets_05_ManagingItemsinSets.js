//set will contain unique values
let set = new Set([1, 1, 1]);
set.add(2);
set.delete(1);
for (element of set) {
  console.log(set); ///Set(1) {2}
}
console.log(set.has(1)); //false
set.clear();
for (element of set) {
  console.log(set); ///Nothing will be printed here
}
