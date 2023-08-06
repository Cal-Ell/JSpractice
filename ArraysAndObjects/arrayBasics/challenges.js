//Challenge 1
//mutate given array to return [6, 5, 4, 3, 2, 1, 0];
const arr = [1, 2, 3, 4, 5];
let x;

x = arr.push(6);
x = arr.unshift(0);
x = arr.reverse();

//Challenge 2
//combine arr1 and arr2 into a new arr3 with following elements
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let y;

y = arr1.splice(0, 4).concat(arr2);
