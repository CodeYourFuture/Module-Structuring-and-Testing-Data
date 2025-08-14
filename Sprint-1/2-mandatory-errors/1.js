// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// The const variable can't be reassigned; doing so causes a type error. We should use let, which allow reassignment.

let age = 33;
age = age + 1;
console.log(age);