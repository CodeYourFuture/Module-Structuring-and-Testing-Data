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
  return (
    password.length >= 5 && // At least 5 characters
    /[A-Z]/.test(password) && // At least one uppercase letter
    /[a-z]/.test(password) && // At least one lowercase letter
    /[0-9]/.test(password) && // At least one digit
    /[!#$%.*&]/.test(password) && // At least one special character
    !passwords.includes(password) // Must not be any previous password
  );
}
module.exports = passwordValidation;


