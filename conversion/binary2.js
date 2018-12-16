function getNumber(str) {
    var numArray = [1, 2, 4, 8, 16, 32, 64, 128];
    var array = str.split('').reverse();
    var result = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] == 1) {
            result += numArray[i];
        }
    }
    return result
}

console.log(getNumber('101'));
console.log(getNumber('1001011'));
console.log(getNumber('000111'));
console.log(getNumber('1010101'));