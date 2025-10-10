// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
// This will give an error because we only use const for Fixed values so we can change const to let
let age = 33;
age = age + 1;
console.log(age); // that should print 34