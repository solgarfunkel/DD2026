// This is a single line comment in JS
/* This is a 
multiline comment 
*/

// Strings represent textual data using quotes or backticks " ", ' ', ``
let first = "John";
let last = "Ibis";
let fullName = first + " " + last; // string concatenation - can be confusing
console.log(fullName); // output: John Ibis

// Using template literals for easier string interpolation
let fullNameTemplate = `The full name is: ${first} ${last}`;
console.log(fullNameTemplate); // output: The full name is John Ibis

// Common string operations
let sampleString = " Hello, World! ";

console.log(sampleString.length); // length of the string (whitespaces count)
console.log(sampleString.toUpperCase()); // change to all uppercase
console.log(sampleString.toLowerCase()); // change to all lowercase
console.log(sampleString.trim()); // trim whitespaces

// The other way to declare variables
let x = "hello";
const y = "world";