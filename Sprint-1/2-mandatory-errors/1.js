// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

Answer:

//This gives an error because we used const, which can't be changed.
// If we want to update the value, we should use let instead of const.
let age = 33;
age = age + 1;
