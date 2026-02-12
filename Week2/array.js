// Arrays store multiple values in a single variable - cannot mix and match arrays (all string or all numbers)
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
console.log(fruits[0]); // accessing elements by index

// Modifying elements
fruits[1] = "Grapes";
console.log(fruits);

// Pushing new elements
fruits.push("Pineapple");
console.log(fruits);

// Removing last element
let lastFruit = fruits.pop;
console.log(lastFruit);
console.log(fruits);

// Getting length of the array
console.log(fruits.length); 