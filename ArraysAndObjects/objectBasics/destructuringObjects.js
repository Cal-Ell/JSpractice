/////////Destructure////////////
//if you're creating an object where key and value are the same there is no need to add both
const firstName = 'Cal';
const lastName = 'Malagon';
const age = 27;

//oldway of setting
const oldSetPerson = {
    firstName: firstName,
    lastName: lastName,
    age: age
};
console.log(oldSetPerson.firstName); //Cal

//if key and value are same you can do it this way
const newSetPerson = {
    firstName,
    lastName,
    age
};

console.log(newSetPerson.firstName); //Cal

//Destructure

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'John'
    }
};

const {id: todoId, title, user: { name }} = todo;
//you can update the id property name by redefinging it
console.log(todoId); //1
console.log(title); //take out trash
//you can also destructure an object in and object
console.log(name); //John