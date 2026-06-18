// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1; // this line will cause an error because age is declared as constant and cannot be reassigned.

let age = 33;
age += 1; // this line will work because age is declared as a variable and can be reassigned.
