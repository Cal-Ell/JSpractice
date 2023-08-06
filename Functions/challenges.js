//////Challenge 1 ///////
//Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

//(F - 32) * 5 / 9
const getCelcius = f => Math.round(((f - 32) * 5) / 9);

console.log(getCelcius(32)); //0


//////Challenge 2 ///////
//Create an arrow function called `minMax()` that takes in an array of numbers 
//and returns an object with the minimum and maximum numbers in the array.
const array = [55, 32, 43, 54, 65, 76, 87, 98, 109];
const minMax = (arr) => { 
    let min, max; 
    min = Math.min(...arr);
    max = Math.max(...arr);
    return { min, max };
};
console.log(minMax(array));


//////Challenge 3 ///////
//Create an IIFE (Immediately Invoked Function Expression) that takes in the length 
//and width of a rectangle outputs it to the console in a message as soon as the page loads.

(function(l, w) {
    console.log(`length: ${l} and width: ${w}`);
})(10, 5)