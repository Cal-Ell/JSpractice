//Objects are made up of key-value pairs
//Object Literal
const person = {
    name: 'Cal',
    age: 27,
    isAdmin: true,
    address: {
        state: 'California',
        city: 'Redwood City'
    },
    hobbies: ['music', 'sports']
};

//accessing objects
let y;

y = person.name;
y = person['age'];
y = person.address.city;
y = person.hobbies[1];

//update properties
person.name = 'Jane Doe';
person['isAdmin'] = false;


//delete properties
delete person.isAdmin;
//add new property
person.hasChildren = false;
y = person;




//////Spread Operators////////////
//Object constructor
const object = new Object(); //{ id: 1, name: 'Buy Milk', completed: true }
object.id = 1;
object.name = 'Buy Milk';
object.completed = true;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};


/////////Methods///////////
//combine both objects to a new one
const obj3 = {...obj1, ...obj2}; //{ a: 1, b: 2, c: 3, d: 4 }
//Old fashion way of spread operator by using Object.assign()
//first arguement is the target object you are returning
//following arguments are the properties of the objects you want to retrieve and assign to target object
const obj4 = Object.assign({}, obj1); //{ a: 1, b: 2 }

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Study Code'},
    {id: 3, name: 'Workout'},
    {id: 4, name: 'Read'},
];
let z;

z = todos[0].name; //Buy Milk

//Object.keys() grab all keys in object and put it in an array
z = Object.keys(person); // [ 'name', 'age', 'address', 'hobbies', 'hasChildren' ]

//length can't be used on Objects but can on arrays
z = Object.keys(person).length; // 5

//Object.values returns all values from Object in an array
z = Object.values(person);
// [
//     'Jane Doe',
//     27,
//     { state: 'California', city: 'Redwood City' },
//     [ 'music', 'sports' ],
//     false
// ]

//Object.entries returns all key-value pairs from Object in an array
z = Object.entries(person);
// [
//     [ 'name', 'Jane Doe' ],
//     [ 'age', 27 ],
//     [ 'address', { state: 'California', city: 'Redwood City' } ],
//     [ 'hobbies', [ 'music', 'sports' ] ],
//     [ 'hasChildren', false ]
// ]
  
