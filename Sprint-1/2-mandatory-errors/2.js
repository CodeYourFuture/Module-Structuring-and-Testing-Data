// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// the system reads the code top to bottom and because the variable has been create/define before 
// the consol.log it can not recognize the variable

//Wrong
//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

//correct
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


