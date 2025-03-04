let passwords = [];

function passwordValidator(password, passwords) {
  if (password.length < 5) {
    return false; // minimum 5 characters length requirement
  }
  if (!/[A-Z]/.test(password)) {
    return false; // check for at least one uppercase letter
  }
  if (!/[a-z]/.test(password)) {
    return false; // check for at least one lowercase letter
  }
  if (!/\d/.test(password)) {
    return false; // check for at least one digit
  }
  if (!/[!#$%.*&]/.test(password)) {
    return false; // check for at least one special character
  }
  if (passwords.includes(password)) {
    console.log("This password has already been used.");
    return false; // reject if the password is a duplicate
  }
  else {
  passwords.push(password);
  return true;
  }
}

module.exports = passwordValidator;

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
