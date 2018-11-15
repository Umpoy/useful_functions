function getBinary(string) {
    var split = string.split('');
    var toUnicode = split.map(index => index.charCodeAt(0));
    var toBinary = toUnicode.map(index => Number(index).toString(2));
    toBinary[0] = "0" + toBinary[0]
    return toBinary.join(' 0')
}

console.log(getBinary('hello'));
