
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        var letter = str.charCodeAt(i);
        if (letter !== str.charCodeAt(0) + i) {
            return String.fromCharCode(letter - 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); // i
console.log(fearNotLetter("stvwx")); // u
console.log(fearNotLetter("bcdf")); // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined