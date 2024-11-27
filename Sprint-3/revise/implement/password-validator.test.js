/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
function passValidation(newPassword, previousPasswords){
    if (newPassword.length < 5){
        return false;
    }
    let hasUpperCase = /[A-Z]/.test(newPassword);
    let hasLowerCase = /[a-z]/.test(newPassword);
    let hasNumber = /[0-9]/.test(newPassword);
    let hasNonAlpha = /["!""#""$""%"".""*""&"]/.test(newPassword);

    if(!hasUpperCase || !hasLowerCase || !hasNumber || !hasNonAlpha){
        return false;
    }
    if(previousPasswords.includes(newPassword)){
        return false;
    }
    return true
}


let PASSWORDS = ["Liver12345!", "London12345?", "Sheff12345!?"];
console.log(passValidation("Liver12345.", PASSWORDS));

console.assert(passValidation("England54321", PASSWORDS), "test failed. write a valid password");