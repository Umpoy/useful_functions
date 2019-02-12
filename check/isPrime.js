
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num !== 1 && num !== 0
}


console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(37));
console.log(isPrime(987));
console.log(isPrime(1337));
