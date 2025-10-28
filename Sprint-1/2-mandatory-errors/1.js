// trying to create an age variable and then reassign the value by 1

const { cityOfBirth } = require("./2");

let age = 33;
age = age + 1;
console.log(age);
// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
console.log(`I was born in ${cityOfBirth}`);

// Changed const to let because the variables value need to change during the program. const creates a fixed reference that cannot be reassigned. but let allows updating the variable which is required when incrementing or modifying values.