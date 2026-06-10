// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/*
Error here is that value for "const" cannot be reassigned. If we wanna see the code work 
we must use "let" keyword because the variable can be changed. 
*/

let age = 33;
age = age + 1;
console.log(age);

//I have ran this code and got 34 on chrome console 
