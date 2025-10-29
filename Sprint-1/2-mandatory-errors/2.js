// Currently trying to print the string "I was born in Bolton" but it isn't working...
// What's the error?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

// ReferenceError: Cannot access 'cityOfBirth' before initialization - temporal dead zone
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#temporal_dead_zone_tdz

// Solution:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
