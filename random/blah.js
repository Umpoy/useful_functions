function diffArray(arr1, arr2) {

    const joinArray = arr1.concat(arr2);
    const holdArray = [];
    const returnArray = [];

    joinArray.forEach(index => {
        if (!holdArray.includes(index)) {
            holdArray.push(index)
        } else {
            returnArray.push(index)
        }
    })
    console.log(returnArray)

    return returnArray
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))

var array = [1, 2, 3, 5].concat([1, 2, 3, 4, 5])
console.log(array)






function Cat(name, color){
    this.name = name;
    this.color = color;
}

const cat = new Cat('Fluffy', 'White');

console.log(cat.name())