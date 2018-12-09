var numberedArray = [9, 2, 1, 5, 6, 3, 10, 7, 8, 4];
var lettersArray = ['c', 'd', 'a', 'e', 'f', 'b'];
var wordsArray = ['cat', 'dog', 'animal', 'elephant', 'frog', 'bear'];

function sort(array) {
    if (array.length <= 1) {
        return array
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)]
}

console.log(sort(numberedArray));
console.log(sort(lettersArray));
console.log(sort(wordsArray));