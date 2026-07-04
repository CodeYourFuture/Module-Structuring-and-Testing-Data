// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// The error is a ReferenceError: Cannot access 'cityOfBirth' before initialization. The error happens because cityOfBirth is used before it is declared. We can fix this error by moving the const cityOfBirth line before console.log().