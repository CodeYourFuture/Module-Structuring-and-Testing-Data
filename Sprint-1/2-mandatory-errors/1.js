// trying to create an age variable and then reassign the value by 1

/*
const age = 33;
age = age + 1;
*/

// TypeError: Assignment to constant variable.
// The error occurs because 'age' is declared as a constant using 'const',
// which means its value cannot be reassigned. Attempting to change its value results in a TypeError.
// To fix this error, we can change 'const' to 'let' or 'var' to allow reassignment.
// Corrected code:

let age = 33;
age = age + 1;

// The variable 'age' is now declared using 'let', allowing it to be reassigned.
// Now, 'age' can be reassigned without any error.
