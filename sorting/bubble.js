var numberedArray = [9, 2, 1, 5, 6, 3, 10, 7, 8, 4];
var lettersArray = ['c', 'd', 'a', 'e', 'f', 'b'];
var wordsArray = ['cat', 'dog', 'animal', 'elephant', 'frog', 'bear'];

function sort(array) {
    var swapped = true;
    var hold;
    while (swapped) {
        swapped = false
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                hold = array[i];
                array[i] = array[i + 1];
                array[i + 1] = hold
                swapped = true
            }
        }
    }
    return array
}

console.log(sort(numberedArray));
console.log(sort(lettersArray));
console.log(sort(wordsArray));