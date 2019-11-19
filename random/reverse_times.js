
// 1. Given an array of five integers in ascending order, 
// write a function called “transform” that takes the array, 
// multiplies each integer by 10, and produces a new array 
// of strings in descending order.

let items = [1, 2, 3, 4, 5];

const transform = array => {
    const output = [];
    array.reverse().map(index => { output.push(index * 10) })
    return output
}
// Output
console.log(transform(items));

// ['50', '40', '30', '20', '10']


// 2. Given the following wheels and categories. Write a function named “wheelsWithCategories” 
// that produces the result below.

const wheels = {
    wheels: [
        {
            wheelID: 1,
            wheelCategory: 'OffRoad',
            wheelName: 'OffRoad One'
        },
        {
            wheelID: 2,
            wheelCategory: 'Performance',
            wheelName: 'Performance two',
        }
    ]
};

const categories = {
    categories: [
        {
            name: 'OffRoad',
            Description: 'Off-Road'
        },
        {
            name: 'Performance',
            Description: 'Performance wheels'
        },
    ]
};


const wheelsWithCategories = (wheels, categories) => {
    let obj = { wheelsWithCategories: [] };
    for (let i = 0; i < wheels.wheels.length; i++) {
        let { name, Description } = categories.categories[i]
        let merge = Object.assign(wheels.wheels[i]);
        merge.catergoryInfo = { name, Description }
        obj['wheelsWithCategories'].push(merge)
    }
    return obj
}


// Output
console.log(wheelsWithCategories(wheels, categories));

//   => {
//     wheelsWithCategories: [
//         {
//             wheelID: 1,
//             wheelCategory: 'OffRoad',
//             wheelName: 'OffRoad One',
//             categoryInfo:
//                 {
//                     name: 'OffRoad',
//                     Description: 'Off-Road'
//                 }
//         },
//         {
//             wheelID: 2,
//             wheelCategory: 'Performance',
//             wheelName: 'Performance two',
//             categoryInfo:
//                 {
//                     name: 'Performance',
//                     Description: 'Performance wheels'
//                 }
//         }
//     ]
// }