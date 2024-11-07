// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*  console.log(`I was born in ${cityOfBirth}`);
    const cityOfBirth = "Bolton";         

 The issue here is that you are trying to use the variable cityOfBirth before 
it has been declared and initialized. 
In JavaScript, variable declarations using const or let are not hoisted to the top 
of their scope in a way that allows 
them to be used before they are defined.

To fix this, we must move the declaration and initialization of cityOfBirth above the console.log() statement: */

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`); 

//  This ensures that the variable cityOfBirth is defined before being used in the console.log() statement.