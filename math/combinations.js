var factorial = require('./factorial.js');

const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

console.log(combination(6, 4));
console.log(combination(19, 1))