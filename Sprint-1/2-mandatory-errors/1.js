// trying to create an age variable and then reassign the value by 1

// This will throw an error because age is a constant variable and cannot be reassigned
//const age = 33;
// The error will be something like: "TypeError: Assignment to constant variable."
// To fix this, you can declare age with let instead of const
let age = 33;
age = age + 1;

console.log(`My age is now ${age}`);
