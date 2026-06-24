// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?


/*console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";*/
/* The error is that the variable `cityOfBirth` is being used before it is declared and assigned a value. In JavaScript, variables declared with `const` (or `let`) are not hoisted in the same way as `var`, so you cannot access them before their declaration. To fix this, you should declare and assign the variable before using it in the `console.log` statement:*/
//The variable were being accessed from the Temporal Dead Zone (TDZ) before it was declared and assigned a value. In JavaScript, variables declared with `const` (or `let`) are not hoisted in the same way as `var`, so you cannot access them before their declaration. To fix this, you should declare and assign the variable before using it in the `console.log` statement:

const cityOfBirth = "Bolton";

console.log(`I was born in ${cityOfBirth}`);