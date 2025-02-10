// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
//Answer
//ReferenceError: Cannot access 'cityOfBirth' before initialization
// the problem is since js execute the code line by line it doesnt get
//the variable when executing line 4 since it is defined on line 5.
