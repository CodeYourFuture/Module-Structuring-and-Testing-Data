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

function passwordValidation(password, passwords) {
  // Check the password length
  if (password.length < 5) {
    return false; // Must be at least 5 characters
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false; // Must contain at least one uppercase letter
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false; // Must contain at least one lowercase letter
  }

  // Check if the password contains at least one digit
  if (!/[0-9]/.test(password)) {
    return false; // Must contain at least one number
  }

  // Check if the password contains at least one special character
  if (!/[!#$%.*&]/.test(password)) {
    return false; // Must contain at least one non-alphanumeric symbol
  }

  // Check if the password is not one of the previous passwords
  if (passwords.includes(password)) {
    return false; // Password must not be any previous password
  }

  return true; // If all conditions are met, return true
}

module.exports = passwordValidation;
