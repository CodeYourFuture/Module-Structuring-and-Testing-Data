// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
// This will cause an error because age is a constant and cannot be reassigned
console.log("I am " + age + " years old");
// To fix the error, we can change const to let, which allows reassignment
let age = 33;
age = age + 1;
console.log("I am " + age + " years old");  