// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/* node shows an "Uncaught SyntaxError: Invalid or unexpected token" this is because using const means the value can’t be reassigned. For this to work, the correct version would be to use 'let'.

let age = 33;
age = age + 1;
console.log(age); // should print 34
*/