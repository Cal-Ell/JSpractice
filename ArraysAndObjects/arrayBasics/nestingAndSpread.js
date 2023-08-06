////Nesting////
//having an array as an index inside another array
let x;
let y;
const fruits = ['apple', 'pear', 'oranges'];
const berrys = ['strawberry', 'rasberry', 'blueberry'];

//fruits.push(berrys);
// [
//     'apple',
//     'pear',
//     'oranges',
//     [ 'strawberry', 'rasberry', 'blueberry' ]
// ]

//grabbing the nested array (berrys) from fruits
//x = fruits[3]; //[ 'strawberry', 'rasberry', 'blueberry' ]
//grabbing final element from nested array in array
//x = fruits[3][2]; //blueberry

//new array nesting both arrays
const allFruits = [fruits, berrys];
x = allFruits;

// [
//     [
//       'apple',
//       'pear',
//       'oranges',
//       [ 'strawberry', 'rasberry', 'blueberry' ]
//     ],
//     [ 'strawberry', 'rasberry', 'blueberry' ]
// ]

//Concat
//Takes items from one array and adds it to a different array as separate items
x = fruits.concat(berrys); //[ 'apple', 'pear', 'oranges', 'strawberry', 'rasberry', 'blueberry' ]
//notice the berry array is not nested in fruits, it is combined


//Spread (...)
//mainly used in objects than arrays
//example you want only the items in berrys and fruits, not the two arrays themselves
y = [...fruits, ...berrys]; //[ 'apple', 'pear', 'oranges', 'strawberry', 'rasberry', 'blueberry' ]

//Flatten Arrays
//Removes nested array in array 
const array = [1, 2, [3, 4], 5, [6, 7], 8];
y = array.flat();
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]
  
//Static Methods on Array Objects


//Used to see if data structure that acts like an array isn't actually an Array
//Like on DOM where it has HTML collections and not actually an array
x = Array.isArray('Hello')  //false
x = Array.isArray(fruits); //true


// Create an array from an array like value
//Useful for nodeless or HTML collection
x = Array.from('12345'); // [ '1', '2', '3', '4', '5' ]

// Create an array from a set of values
//maybe you have variables that you want their values to be inside an array
const a = 1;
const b = [2, '2.5'];
const c = '3';
const d = 4;
const e = 5;
x = Array.of(a, b, c, d, e); // [ 1, [ 2, '2.5' ], '3', 4, 5 ]


//Destructure
const desArr = [1, 2, 3, 4, 5];
const [first1, second1] = desArr;

console.log(first1) // 1
console.log(second1) // 2

//Rest Operator [...rest]

const [first, second, ...rest] = desArr;
console.log(first, second, rest); // 1 2 [ 3, 4, 5 ]