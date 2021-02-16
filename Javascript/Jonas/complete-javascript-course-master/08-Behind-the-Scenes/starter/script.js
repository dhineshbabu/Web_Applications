'use strict';


// Hoisting with variables
/*
console.log(me);
//console.log(job);
//console.log(year);

var me  = 'dhinesh';
let job = 'engineer';
const year = 2010;
*/
// this keyword
/*

console.log(this);

const calcAge = function(bitrthYear) {
    console.log(2037 - bitrthYear);
    console.log(this);
}

calcAge(1991);

const calcAgeArrow = (bitrthYear) => {
    console.log(2037 - bitrthYear);
    console.log(this);
}

calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
    }
};

jonas.calcAge();

const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge;

// function borrowing
matilda.calcAge();
*/

//argumens only available for normal function ans expresssions
/*
const addExpr = function(a,b) {
    console.log(arguments);
    console.log(typeof arguments);
}

addExpr(2,3);
*/
