let set = new Set([1, 1, 1]);
set.add(2);

for (element of set.entries()) {
  console.log(element); //[1, 1], [2, 2]
}
//We also have set.keys, and set.values. In sets value is stored as a key
