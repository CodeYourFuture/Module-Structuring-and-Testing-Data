// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
 
/*Use const if the variable value should not change.
Use let if you plan to change the value.
Changing the constant will cause the code to execute correctly.*/

let age = 33;
age = age + 1;  
// or same option//  
age++;

console.log(age);
