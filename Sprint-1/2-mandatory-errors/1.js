// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;  
// The above code will throw an error because 'age' is a constant variable declared with 'const'.
// In JavaScript, variables declared with 'const' cannot be reassigned a new value after their initial assignment.
// To fix this, you can declare 'age' using 'let' instead of 'const', allowing it to be reassigned.
// let age = 33;
console.log(age); // Output: 34
// The code above declares a variable 'age' with an initial value of 33.
// Then, it reassigns the value of 'age' by adding 1 to its current value.
// The final value of 'age' will be 34, which is the result of the initial value (33) plus 1.