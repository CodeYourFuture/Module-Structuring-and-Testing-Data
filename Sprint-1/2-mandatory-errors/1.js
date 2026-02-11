// trying to create an age variable and then reassign the value by 1

const age = 33;
//age = age + 1;

// we can't do that with const variable, because JS locks the reference. 
// the best choice is to use "let" variable.
let age2 = 33;
age2 = age2 + 1; // or age++ if wanna increase by "1";
console.log(age2);
