let card1 = {
  name: "card One"
};

let card2 = {
  name: "card Two"
};

let deck = new Map();
deck.set("c1", card1);
deck.set("c2", card2);
console.log(deck.size); //2
console.log(deck.get("c1")); //{name: "card One"}
deck.delete("c1");
console.log(deck.size);
deck.clear();
