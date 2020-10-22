let array = Array(5);
console.log(array); //(5) [empty × 5] => 5 undefined positions

let array1 = Array.of(5);
console.log(array1); //[5];

let array2 = [1, 2, 3];
let newArray = Array.from(array2, element => element * 2);
console.log(newArray); //[2, 4, 6]
let filledArray = array2.fill(100);
console.log(filledArray); //[100, 100, 100]
let array3 = [1, 2, 3];
let anotherFilledArray = array3.fill(100, 1, 2);
console.log(anotherFilledArray); // [1, 100, 3]
let array4 = [10, 12, 16];
console.log(array4.find(val => val > 10)); //stops after the first element

var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(findCherries)); //{name: "cherries", quantity: 5}

let array5 = [1, 2, 3];
console.log(array5.copyWithin(1, 2)); //[1, 3, 3]. Alters the master array. Copy from index 1 and paste it to index 2

let array6 = [1, 2, 3];
console.log(array6.entries()); //Array Iterator {}
let it = array6.entries();
for (let element of it) {
  console.log(element); //  [0, 1] [1, 2] [2, 3]
}
