//Example #1 for WeakMap

/*
let card1 = {
  name: "card One"
};

let card2 = {
  name: "card Two"
};

let deck = new WeakMap();
deck.set("c1", card1); //Invalid value used as weak map key. String as a key will not work for Weakmap
//only objects can be used as keys in Weak maps so that we can enable garbage collections
//Also it is not enumerable
deck.set("c2", card2);
//For entries. We can directly use the namee of the map instead of entries method
for (entry of deck.entries()) {
  console.log(entry);
}
*/

//Example #2 for WeakMap
let card1 = {
  name: "card One"
};

let card2 = {
  name: "card Two"
};

let key1 = { a: 1 };
let key2 = { b: 2 };

let deck = new WeakMap();
deck.set(key1, card1);
deck.set(key2, card2);
console.log(deck.get(key1)); //{name: "card One"}
