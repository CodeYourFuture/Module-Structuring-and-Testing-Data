// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/

// The error in the above code happens because the variable `cityOfBirth` is being used before it has been declared. In JavaScript, variables declared with `const` or `let` are not hoisted, meaning they cannot be accessed BEFORE their declaration. Therefore we need to declare the variable BEFORE using it in the console.log statement.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
