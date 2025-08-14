// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// The code does not work because const creates a variable that cannot be changed. Since we want to increase the value of age, we should use let instead of const. This allows us to reassign the value of the variable:

let age = 33;
age = age + 1;
