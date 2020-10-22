//set will contain unique values
let set = new Set([1, 1, 1]);
set.add(2);
for (element of set) {
  console.log(set); ///Set(2) {1, 2}
}
