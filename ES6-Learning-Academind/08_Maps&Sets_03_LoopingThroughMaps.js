let card1 = {
  name: "card One"
};

let card2 = {
  name: "card Two"
};

let deck = new Map();
deck.set("c1", card1);
deck.set("c2", card2);
console.log(deck.get("c1")); //{name: "card One"}

//For keys
for (key of deck.keys()) {
  console.log(key); // "c1", "c2"
}

///For values
for (value of deck.values()) {
  console.log(value); // "{name: "card One"}", "{name: "card Two"}"
}

//For entries. We can directly use the namee of the map instead of entries method
for (entry of deck.entries()) {
  console.log(entry); // ["c1", {…}], ["c2", {…}]
}
