function getBinary(string) {
    var split = string.split('');
    var toUnicode = split.map(index => index.charCodeAt(0));
    var toBinary = toUnicode.map(index => Number(index).toString(2)).join(' ');
    return toBinary
}

console.log(getBinary('hello'));
