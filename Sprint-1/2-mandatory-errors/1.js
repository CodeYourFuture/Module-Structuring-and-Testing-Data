// trying to create an age variable and then reassign the value by 1

//const age = 33; // redeclaring with a let or var solves this error
/* variables declared with `const` in JavaScript cannot be reassigned. 
However, if the `const` variable is an object or array,
its contents can still be changed (the reference is immutable, not the value).
*/
let age = 33;
age = age + 1;

console.log(age);
