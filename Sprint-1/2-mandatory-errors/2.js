// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


//explanation 
//We are trying to access the variable cityOfBirth before it's declared and initialised. Since const is blocked scoped and not hoisted,it causes  ReferenceError: Cannot access 'cityOfBirth' before initialization 

//to fix this we need to declare and initialise the variable first and then log it to the console.