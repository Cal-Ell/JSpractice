let x;

//Array Literal
const numbers = [12, 32, 1, 64, 99];

//Array Constructor
const fruit = new Array('apple', 'grape', 'orange');

x = numbers[0];

//Methods///

//length: access length value of array
let total = numbers.length; // 5

//push: pushes element to end of array
numbers.push(20); // [ 12, 32, 1, 64, 99, 20 ]

//pop: grabs last element of array
numbers.pop(); // [ 12, 32, 1, 64, 99 ]

//unshift: adds element to beginning of array
numbers.unshift(99); // [ 99, 12, 32, 1, 64, 99 ]

//shift: removes first element of array
numbers.shift(); // [ 12, 32, 1, 64, 99 ]

//reverse: returns an array with it's elements reversed
numbers.reverse(); // [ 99, 64, 1, 32, 12 ]

//indexOf: returns index of specific value in array
//will return -1 if it does not exist
x = numbers.indexOf(32); //3

//slice: returns array of index, and does NOT manipulate the original array
x = numbers.slice(1); //[ 64, 1, 32, 12 ]
//returns array between indexes
x = numbers.slice(1, 3); // [ 64, 1 ]

//splice: returns array of index, and DOES manipulate the original array
x = numbers.splice(1); //[ 64, 1, 32, 12 ]
//returns array between indexes
x = numbers.splice(1, 3); // [ 64, 1 ]

//chain methods
const arr = [2, 32, 56, 10, 97, 27];
let y;

//y = arr.splice(1, 4).reverse(); //[ 97, 10, 56, 32 ]
y = arr.splice(1, 4).reverse().toString().charAt(1); //7