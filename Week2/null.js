// Intentional absence of value 
let data = null;

console.log(data); // output: null
console.log(typeof data); // output: object

data = "something";
console.log(data); // output: something
console.log(typeof data); // output: string

// When declaring a variable withouht initial value:
let info;
console.log(info); // output: undefined
console.log(typeof info); // output: undefined

// You can assign it something like if I want it to be a string:
let infoString = " ";
console.log(infoString);
console.log(typeof infoString);