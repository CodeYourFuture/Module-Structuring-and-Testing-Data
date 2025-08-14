// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/

/*
The error in the above code happens because the variable `cityOfBirth` is being used before it has been declared. In JavaScript, variables declared with `const` or `let` are not hoisted, meaning that they are not able to be accessed BEFORE their declaration ('hoisting' is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)). Therefore we need to declare the variable BEFORE using it in the console.log statement for the script to run properly.
*/
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
