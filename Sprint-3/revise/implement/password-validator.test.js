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


function isPasswordValid(password, previousPasswords) {
  
    // Regular expression to validate password
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%.*&])[a-zA-Z0-9!#$%.*&]{5,}$");

    // Check if password matches the regex
    if (!regex.test(password)) {
        return "Invalid password";
    }

    // Check if password has been used previously
    if (previousPasswords.includes(password)) {
        return "Password has been used before";
    }

    return "Password is valid";
}

let previousPasswords = ["Hello1!", "BakiHama*", "Death#", "HitmaN47", "uNKNW0!"];

console.log(isPasswordValid("acdeA9!", previousPasswords));  // Output: Valid password
console.log(isPasswordValid("Hello1!", previousPasswords));  // Output: Password has been used before
console.log(isPasswordValid("NewPassword1!", previousPasswords));  // Output: Password is valid
