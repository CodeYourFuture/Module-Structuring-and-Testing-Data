// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*Answer : The problem is that cityOfBirth is used before it’s defined.
 JavaScript runs code from top to bottom, so when console.log tries to use cityOfBirth, it hasn’t been set yet*/

// console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// const myWord= `I was born in ${cityOfBirth}`;
// console.log(myWord);

console.log(`I was born in ${cityOfBirth}`);