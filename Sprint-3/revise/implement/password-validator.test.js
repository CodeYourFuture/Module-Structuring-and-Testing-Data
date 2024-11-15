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

function checkPassword(pass){
    if(pass < 5){
        return false;
    } else if(!/[0-9]/.test(pass)){
        return false;
    } else if (!/[!#$%.&*]/.test(pass)){
        return false;
    }
    return true;
}

let userPassword = checkPassword("te^A");
console.log(userPassword);


