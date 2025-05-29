// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

// ReferenceError: Cannot access 'cityOfBirth' before initialization

// line 4 (console.log) runs before line 5 (const defined)
// when console.log runs, there is no variable called cityOfBirth
// reverse the lines so that the variable is defined before anything attempts to use it

const cityOfBirth = "Northampton";
console.log(`I was born in ${cityOfBirth}`);
