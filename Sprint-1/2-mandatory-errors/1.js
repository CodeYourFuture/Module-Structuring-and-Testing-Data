// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

console.log(age);

// TypeError: Assignment to constant variable.
// We can't change the value of a variable when it is declared with const, we need to declare it with let
