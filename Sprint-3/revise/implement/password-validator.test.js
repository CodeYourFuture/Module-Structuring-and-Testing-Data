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

function passwordValidation (password, passwords){
    const haveMinLength = password.length >= 5;
    const haveUpperCase = /[A-Z]/.test(password);
    const haveLowerCase = /[a-z]/.test(password);
    const haveNumber = /\d/.test(password);
    const haveSymbol = /[!#$%.*&]/.test(password);
    const isNewPassword = !passwords.includes(password);

    return ( haveLowerCase &&
    haveMinLength &&
    haveNumber &&
    haveSymbol && 
    haveUpperCase &&
    isNewPassword);
}

// test case
const previousPasswords = ["Password5!", "Secure$823", "HelloWorld#4"];

console.log(passwordValidation("NewPass1!", previousPasswords)); 
console.log(passwordValidation("Secure$123", previousPasswords)); 
console.log(passwordValidation("short", previousPasswords));
console.log(passwordValidation("NoNumberOrSymbol", previousPasswords)); 
console.log(passwordValidation("Only123!", previousPasswords));