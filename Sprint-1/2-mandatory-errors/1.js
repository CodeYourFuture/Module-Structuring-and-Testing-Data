// trying to create an age variable and then reassign the value by 1

// const age = 33;
// age = age + 1;
// The error occurs because the variable 'age' is declared as a constant using 'const'.
// Constants cannot be reassigned a new value after they are declared.
// To fix this error, you can change the declaration of 'age' to 'let' or 'var' if you want to reassign it later.
// For example: let
 age = 33;
 age = age + 1;
// Now, 'age' can be reassigned without any error.
// Alternatively, if you want to keep 'age' as a constant, you should not attempt to reassign it.
// In that case, you can simply remove the reassignment line:
console.log(age); // Output: 34
// This will output the value of 'age' after the reassignment, which is now 34.
