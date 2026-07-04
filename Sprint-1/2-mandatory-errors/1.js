// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//The error message displayed by Node.js is:
//Uncaught TypeError: Assignment to constant variable
//The error happens because const creates a variable whose value cannot be reassigned.
//To allow the value to change, the variable should be declared with let instead of const.