// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1; // this will cause an error because we can't reassign the value of a const(constant)variable

let age = 33;
age = age + 1;
console.log(age);
// when we want to reassign the variable to a new value we have to use let
