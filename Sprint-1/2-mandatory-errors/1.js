// trying to create an age variable and then reassign the value by 1

/*
const age = 33;
age = age + 1;
*/
// This code will throw an error because it is trying to reassign a value to a constant variable.

let age = 33;
age = age + 1;
// This code will not throw an error because it is using a let variable, which can be reassigned.
console.log(age);
