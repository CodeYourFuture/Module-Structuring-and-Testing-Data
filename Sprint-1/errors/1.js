// trying to create an age variable and then reassign the value by 1
// The error is age is declared with const. Cannot be changed.
// We can fix this by changing const to let.
let age = 33;
age = age + 1;
console.log(age);
