const numberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(numberBetween(50, 100));
console.log(numberBetween(1, 1000));
console.log(numberBetween(1, 10));
