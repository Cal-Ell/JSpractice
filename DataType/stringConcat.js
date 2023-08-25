let x;

const name = 'John';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old.';

//Template Literal
x = `Hello my name is ${name} and I am ${age} years old`;

//String properties and Methods
const s = 'Hello World'; //data type is string
const ss = new String('Hello World'); //data type is Object

x = s.length;  //not using length() because thats for methods, this is for properties

x = s[1]; //Access value by key

x = s.__proto__; //Objects have methods stored in prototype, '__proto__' accesses them
console.log(x);
