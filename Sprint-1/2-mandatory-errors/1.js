// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//TypeError: Assignment to constant variable.
// here we already have a variable constant age=33, now we are trying to reassign the variable constant.

// to enable this work, we can say;
let age = 33;
age = age + 1;

console.log(age); //34 
//this will be a way to fix error.




