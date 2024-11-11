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
 
____________________________________SOLUTION____________________________________________________________________________
/*
Step-by-Step Solution Plan
Input Parameters:

password (string): the password to validate.
previousPasswords (array): an array of previously used passwords.
Return: Boolean indicating if the password is valid (true) or invalid (false).

Validation Requirements:

Length Check: Password has at least 5 characters.
Uppercase Check: Password contains at least one uppercase letter (A-Z).
Lowercase Check: Password contains at least one lowercase letter (a-z).
Numeric Check: Password contains at least one digit (0-9).
Special Character Check: Password contains at least one of the specified special characters (!, #, $, %, ., *, &).
Uniqueness Check: Password is not in the previousPasswords array.
🧪 Initial Test Case
Using the password "Pass1!" with previous passwords ["OldPass1!", "Test2#"], 
the function should return true if the password meets all criteria.
*/

                                  // JavaScript Code Implementation

function isValidPassword(password, previousPasswords) {
    // Check if password has at least 5 characters
    if (password.length < 5) {
        return false;
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check if password contains at least one digit
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Check if password contains at least one special character
    if (!/[!#$%.*&]/.test(password)) {
        return false;
    }

    // Check if password is not in the list of previous passwords
    if (previousPasswords.includes(password)) {
        return false;
    }

    // All checks passed
    return true;
}

// Test case to check if the function works correctly
const previousPasswords = ["OldPass1!", "Test2#"];
const password = "Pass1!";

console.log(isValidPassword(password, previousPasswords)); // Expected output: true

/*
Explanation of the Code

Regex Matching:

/[A-Z]/ checks for at least one uppercase letter.
/[a-z]/ checks for at least one lowercase letter.
/[0-9]/ checks for at least one digit.
/[!#$%.*&]/ checks for any special character from the specified set.
Validation Logic:

Each requirement is validated with an if statement. If any condition fails, the function immediately returns false.
If all checks pass, the function returns true.
Example Execution:

Given "Pass1!", the function verifies all conditions and confirms it’s not in previousPasswords, thus returning true.
Additional Test Cases
To further test robustness:

Invalid Length: isValidPassword("P1!", []) → false
Missing Uppercase: isValidPassword("pass1!", []) → false
Missing Digit: isValidPassword("Pass!", []) → false
Valid Case: isValidPassword("Secure1$", ["OldPassword!"]) → true
*/