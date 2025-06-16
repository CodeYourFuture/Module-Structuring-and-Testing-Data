// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;
console.log(age);
//The error displayed is: "TypeError: Assignment to constant variable.
// There is an error because we are trying to reassign a constant variable which is not allowed, as constant variables cannot be reassigned after their initial declaration.
// To resolve the error, we need to use let instead of const to be able to change the value later.
