// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

/*
program couldn't find variable, because it was declared after calling, which is not correct
problem was solved by moving variable declaration above the calling
*/
