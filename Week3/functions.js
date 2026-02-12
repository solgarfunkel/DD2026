function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(5,3));

let result = addNumbers(10,15);
console.log(result);

// Practice -> create a function greet(name) outputs a greeting
function greet(name){
    return 'Hello, ${name}';
}
console.log(greet("Mia"));

// Another way
function greet(name){
    console.log('Hello, ${name}');
}
greet("Mia");