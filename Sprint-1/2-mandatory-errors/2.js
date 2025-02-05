// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

//The error was Referrence Error which is cause by using a variable before declaring it. JavaScript reads from top to bottom, so we have to declare the variable first and the use it. I moved the cityOfBirth variable one line above the console.log funciton