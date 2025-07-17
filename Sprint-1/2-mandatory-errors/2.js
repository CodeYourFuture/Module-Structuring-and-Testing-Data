// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/* 
This happens because in JavaScript, variables declared with `let` or `const` are not accessible before their declaration 
due to a behavior called the **temporal dead zone**. 
If you try to use such a variable before it’s initialized, you get a `ReferenceError`. 
To avoid this, always declare and assign your variables before using them.

*/
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
