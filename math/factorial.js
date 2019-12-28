const factorial = n => n ? n * factorial(n - 1) : 1;

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(20));

module.exports = factorial;