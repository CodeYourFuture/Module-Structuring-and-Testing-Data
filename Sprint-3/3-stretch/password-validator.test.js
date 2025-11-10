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
const previousPasswords = [];//Create an array to store previous passwords

function isValidPassword(password) {
  // Rule 1: At least 5 characters
  if (password.length < 5) return false;

  // Rule 2: At least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Rule 3: At least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Rule 4: At least one number
  if (!/[0-9]/.test(password)) return false;

  // Rule 5: At least one special symbol ! # $ % . * &
  if (!/[!#$%.*&]/.test(password)) return false;

  // Rule 6: Must not be a previous password
  if (previousPasswords.includes(password)) return false;

  // If all checks pass, save password and return true
  previousPasswords.push(password);
  return true;
}

module.exports = isValidPassword;


const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);