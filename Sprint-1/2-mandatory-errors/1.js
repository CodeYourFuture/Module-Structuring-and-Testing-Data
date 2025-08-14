// trying to create an age variable and then reassign the value by 1
/*
Value cannot be reassign if the variable is declared with the keyword 'const'
instead we need to use the keyword 'let' to declare the variable. It allows to reassign the value to a variable.
*/

//const age = 33;
let age = 33;
age = age + 1;

//Logging the value of age.
console.log(age);
