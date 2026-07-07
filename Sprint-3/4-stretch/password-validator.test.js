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

const previousPasswords = [];

function isValidPassword(password) {
  // Check length
  if (password.length < 5) return false;

  // Check if we already used this password
  if (previousPasswords.includes(password)) return false;

  // Check for required types using simple helper logic
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!#$%&.*]/.test(password);

  // If all conditions are met, save it and return true
  if (hasUpper && hasLower && hasNumber && hasSymbol) {
    previousPasswords.push(password);
    return true;
  }

  // Otherwise, it's invalid
  return false;
}

module.exports = isValidPassword;