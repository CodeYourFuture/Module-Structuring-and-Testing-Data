// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

/* 
It a reference error, we cannot access cityOfBirth before initializing it. We are trying to fetch a 
value of cityOfbirth without declaring it. The interpreter first runs the line 1 i.e console.log one 
and try to find a value but its not declare and it will give a error. Though we have declare is in line 2 
but js is an interpreted language that interpret line by line and runs the code.
The cityOfBirth is in locked state right now js couldn't access until reaches to it. 
Right now it is in temporal locked state. 
*/
