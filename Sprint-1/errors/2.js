// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/* console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* Error : "can't access lexical declaration 'X' before initialization" 
The error ReferenceError: can't access lexical declaration 'X' before initialization means
that JavaScript is trying to access a variable (in this case, named 'X') before it has been
initialized. This often happens with variables declared using let or const, as they are "hoisted" 
to the top of their scope but aren’t initialized until the line where they’re defined. 
This is known as being in the "temporal dead zone

Solution:  declare variables with let or const at the beginning of their scope./*/

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
