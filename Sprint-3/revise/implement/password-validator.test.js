/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean :true/false

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
function isValidPassword(password, previousPasswords) {
  // Rule 1: The password must have at least 5 characters
  if (password.length < 5) {
    return false;
  }

  // Rule 2: It must have at least one uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Rule 3: It must have at least one lowercase letter (a-z)
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Rule 4: It must have at least one number (0-9)
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Rule 5: It must have at least one non-alphanumeric symbol (e.g., !, #, $, %, etc.)
  if (!/[\W_]/.test(password)) {
    return false;
  }

  // Rule 6: The password must not be in the previousPasswords array
  if (previousPasswords.includes(password)) {
    return false;
  }

  // If all rules are met, the password is valid
  return true; 
}

// Example of usage:
const previousPasswords = ["Password123!", "12345678", "helloWorld!"];
console.log(isValidPassword("NewPassword1!", previousPasswords)); // Expected: true
console.log(isValidPassword("password123", previousPasswords));  // Expected: false
console.log(isValidPassword("1234", previousPasswords));        // Expected: false