'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Array restructuring
/*
const numbers = [1,2,3];

const [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

let [first, ,second] = restaurant.categories;
console.log(first, second);

[second, first] = [first, second]; // swapping
console.log(first, second)

console.log(restaurant.order(2,0));
const [starter, main] = restaurant.order(2,0);
console.log(starter, main);

const nested = [2,4, [5,6]];

//const [i, , j] = nested;

const [i,, [j, k]] = nested;
console.log(i,j,k);

// Default values 
const [p,q,r=1] = [8,9];
console.log(p,q,r);
*/

// Object restructuring

/*

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//renaming
const { name: restaurantName } = restaurant;
console.log(restaurantName);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 11;
let b = 999;
const obj = { a: 23, b: 7 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);
*/
//spread operator
/*
const arr = [1, 2, 3];
const newArr = [7, 8, ...arr];
console.log(newArr);

//copy array
const mainManuCopy = [...restaurant.mainMenu];

//join 2 arrays
const totalMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(totalMenu);

//Iterables: arrays, strins. maps, sets , not objects

const str = 'Dhinesh';
const letters = [...str, 'S.'];
console.log(letters);
console.log(...letters);

//Rest operator - to pack data

const arr1 = [1, 2, ...[3, 4]]; // this is spread
const [a1, b1, ...others] = arr1; // this is rest
console.log(others);

//for objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//for Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5);
*/

// short circuiting ||
/*

console.log( 3 || 'Jonas');
console.log("" || "This is falsy");
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23);

//settings defaulyt values
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

// short circuiting &&

console.log( 3 && 'Jonas');
console.log("" && "This is falsy");
console.log(undefined && null);
console.log('Hello' && 23 && 0);

//&& is used to skip the execution at some cases

console.log(restaurant.order && restaurant.order(1,2));
console.log(restaurant.skip && restaurant.order(1,2));
*/


// for-of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
*/

// Optional chaining
/*
console.log(restaurant.openingHours.mon?.open);
*/

// Looping over object keys, values and entries
/*

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//Property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
*/

// SETS - elemets are unique
/*
const orderSet = new Set(['Pasta', 'Pizza', 'KFC', 'Pizza', 'Pasta']);
console.log(orderSet);
console.log(new Set('Dhinesh'));
console.log(orderSet.size);
console.log(orderSet.has("Bread"));
orderSet.add('Garlic Bread')
console.log(orderSet);

//reading data from set
for(const setData of orderSet){
  console.log(setData);
}

// removing dupliicates from array using sets

const orderArray = ['Pasta', 'Pizza', 'KFC', 'Pizza', 'Pasta'];
const orderSet1 = new Set(orderArray);
console.log(orderSet1);

//conversion from set to array
const newArray = [...new Set(orderArray)]
console.log(newArray);
*/

// MAPS
/*
const restaurantMap = new Map();
restaurantMap.set('name', 'Classico Italiano');
restaurantMap.set(1, 'India');
restaurantMap.set(2, 'Russia');
restaurantMap.set('categories', ["Indian", 'Chinese']);
restaurantMap.set(true, 'Indian food');
console.log(restaurantMap);

console.log(restaurantMap.get(true));
console.log(restaurantMap.get('categories')[0]);


//checking keys of a map
console.log(restaurantMap.has('categories'));
restaurantMap.delete(1);
console.log(restaurantMap);
console.log(restaurantMap.size);


const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again']
]);

console.log(question);

//Convert object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for(const [key, value] of question.entries()) {
  console.log(key);
}

//map to array conversion
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

// Working with Strings

const airline = "Indian Air Lines";
const plane = 'A320';

console.log(plane[0]);
console.log('Dhinesh'[0]);
console.log(plane.length);
console.log(plane.indexOf('3'));
console.log(plane.lastIndexOf('3'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(7)); //same as below
console.log(airline.slice(airline.indexOf("Air")));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(-2));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);

  if(s==='B' || s ==='E') console.log('You got the middle seat');
  else console.log("You are lucky 😄");
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline[0].toUpperCase() + airline.slice(1).toLowerCase());
console.log("dfdf ".trim());
//replacing
const priceUS = '2323$';
const priceINR = priceUS.replace('$', "*"); // will replace only first occurrence
console.log(priceINR);

// using regex
console.log(priceUS.replace(/\$/g, "*")); 

console.log(airline.startsWith('Indian'));
console.log(airline.endsWith('Lines'));
console.log(airline.includes('Air'));

// splitting
console.log('a+very+nice+string'.split('+'));
console.log("Dhinesh babu".split(" ")); 
const [fName, lName] =  "Dhinesh babu".split(" ");
// joining
const fullName =  ['Mr.',  fName, lName].join("");
console.log(fullName);

const passenger = 'dhinesh babu muthuraj';

const capitalize = function(name) {
  const names = name.split(' ');

  const namesUpper = [];

  for(const n of names) {
    namesUpper.push(n[0].toUpperCase()+ n.slice(1));
  }

  console.log(namesUpper.join(' '));

}

capitalize(passenger);

// Padding 

const message = ' Go to gate 23';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function(number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(4567456745673214));

//repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));


