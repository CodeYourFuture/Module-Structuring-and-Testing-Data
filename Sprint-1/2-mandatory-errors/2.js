// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

// The error occurs because the variable 'cityOfBirth' is used before it is declared.
// In JavaScript, variables declared with 'const' or 'let' are not hoisted to the top of their scope.
// To fix this error, you should declare the variable 'cityOfBirth' before using it in the console.log statement.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
// This will correctly output "I was born in Bolton" without any errors.
