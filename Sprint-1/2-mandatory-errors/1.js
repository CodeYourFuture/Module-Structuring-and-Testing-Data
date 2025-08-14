// trying to create an age variable and then reassign the value by 1

//const age = 33;
//age = age + 1;
// This will throw an error because 'age' is a constant and cannot be reassigned
// To fix this, we can declare 'age' using 'let' instead of 'const'
let age = 33;
age = age + 1;
// Now 'age' can be reassigned without any error
console.log(age); // Output: 34