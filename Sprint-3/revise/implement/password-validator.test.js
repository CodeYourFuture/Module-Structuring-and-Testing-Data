/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const { hasUncaughtExceptionCaptureCallback } = require("process");

/* function PassValidChecker() outputs true if all the 6 conditions stated above equal to true. I create a function for each condition first.
Afterward I use those conditions in my PassValidChecker(). */

//first function: it counts the number of characters in the string str.
let charCount = (str) => str.length;
test (`expected output `, ()=>{
    hasUncaughtExceptionCaptureCallback(charCount("sogand")).toBe(6);
});
