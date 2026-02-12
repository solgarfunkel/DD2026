// Non-primitive data types: objects are used to store collections of data and more complex entities
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};

console.log(person.firstName);
console.log(person.address.city);

// Adding a new property to an object
person.email = "johndoe@miami.edu";
console.log(person.email);
console.log(person);

// Creating an empty object
let person2 = {}; 
person2.firstName = "Jane";
person2.lastName = "Doe";
person2.age = 20;