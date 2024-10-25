// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
/*the answer is related to the order that the code was written. the variable declaration followed console.log
instead of preceding it resulting in a reference error. I cut the variable declaration and pasted it above
console.log to resolve the problem.*/ 

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

