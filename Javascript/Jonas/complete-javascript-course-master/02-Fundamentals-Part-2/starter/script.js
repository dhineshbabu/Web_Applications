/* 
'use strict';
let hasdriversLicense = false;
const passTest = true;

if(passTest) hasdriversLicense = true;
if(hasdriversLicense) console.log("I can drive");

const interface = 124;
*/

//Functions

/*

function logger() {
    console.log("This is from a function");
}

logger();

function fruitProcessor(apples, oranges){
    console.log(`we have ${apples} apples and ${oranges}`);
}

fruitProcessor(4,5);

console.log(23);


let sum = (a,b) => console.log(a+b);
sum(10,12);

const sum2 = function(a,b) {
    return a+b;
}

console.log(sum2(12,2));

*/

//Arrays
/*
const friends = ["Dhinesh", "Kanu", "Bru"];

friends.forEach(element => {
    console.log(element);
});
 

const years = new Array(1991, 1984);
console.log( years[0]);
console.log(years.length);
console.log(years[3] - 1);
years[3] = "khsakjhfdk";
console.log(years);
console.log(years[2]);
const dummyArray = [1992-1];
console.log(dummyArray);
const dummyArray2 = [194, dummyArray];
console.log(dummyArray2[1][0]);
*/

// Array methods
/*
const friends = ["Dhinesh", "Kanu", "Bru"];
friends.push("hasini");
console.log(friends);
friends.unshift("kini");
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Bru"));
console.log(friends.includes("Kanu"));
*/

/*
//Objects
const dhineshObject = {
    firstName: "Dhinesh",
    lastName: "Babu",
    age: 30,
    birthYear: 2020,
    job: "Engineer",
    friends: ["Dhinesh", "Kanu", "Bru"],
    hasDriverLicense: true,
    calcAge : function() {
        return 2037 - this.birthYear;
    }

};

console.log(dhineshObject);
console.log(dhineshObject.firstName);
console.log(dhineshObject["firstName"]);
const nameKey = "Name";
console.log(dhineshObject['first' + nameKey]);
dhineshObject.location = "India";
console.log(dhineshObject);
console.log(dhineshObject.friends[1]);

// Object methods
console.log(dhineshObject.calcAge());
console.log( );
*/

//Loops

/*

const dhineshObject = {
    firstName: "Dhinesh",
    lastName: "Babu",
    age: 30,
    birthYear: 2020,
    job: "Engineer",
    friends: ["Dhinesh", "Kanu", "Bru"],
    hasDriverLicense: true
};

for (let i = 0; i < dhineshObject.friends.length; i++) {
    console.log(dhineshObject.friends[i], typeof dhineshObject.friends[i]);
    
}

let value = 10;

while(value < 20){
    console.log(value);
    value++;
}

let dice = Math.trunc(Math.random() *6) + 1;

while(dice !== 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() *6) + 1;
}
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: prompt('Degrees celsius'),
  };

  console.warn(measurement.unit);
  debugger;
  console.table(measurement)
};

measureKelvin();
