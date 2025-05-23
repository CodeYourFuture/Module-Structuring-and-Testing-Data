// trying to create an age variable and then reassign the value by 1
let age = 33;
age = age + 1;

/* 
ERROR DEBUGGING
const age = 33;
age = age + 1;

  
Error Type: TypeError: Assignment to constant variable.

This error occurs because it's tried to change the value of a variable declared with const.

Variables declared with const are constant, meaning their value cannot be reassigned after initialization.

In this case, the variable age is declared with const and it's tried to update it with age = age + 1; which is not allowed.

  */