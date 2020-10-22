let number = NaN;
console.log(isNaN(number)); // true
console.log(Number.isNaN(number)); // true
console.log(Number.isFinite(09049032890)); //true
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.34)); //false
