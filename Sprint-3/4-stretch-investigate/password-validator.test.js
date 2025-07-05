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
 // Assert
    

  const previousPasswords = ("Password123!", "Welcome1$", "Admin#2023");

function isValidPassword(password) {
  if (password.length < 5) {
    return { valid: false, message: "Password must be at least 5 characters long." };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: "Password must include at least one uppercase letter." };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: "Password must include at least one lowercase letter." };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: "Password must include at least one number." };
  }

  if (!/[!#$%.*&]/.test(password)) {
    return { valid: false, message: "Password must include at least one special symbol (!#$%.*&)." };
  }

  if (previousPasswords.includes(password)) {
    return { valid: false, message: "This password has already been used. Please choose a new one." };
  }

  return { valid: true };
}

module.exports = isValidPassword;