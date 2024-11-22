/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.✔️
- Have at least one English uppercase letter (A-Z)✔️
- Have at least one English lowercase letter (a-z)✔️
- Have at least one number (0-9)✔️
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")✔️
- Must not be any previous password in the passwords array. ✔️

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const passwords = ["Cyf2024!", "Cyf2023$", "Cyf2022*", "Cyf2021#"]; // Initial passwords
function passwordValidator(password) {
  // Check if password is at least 5 characters long
  if (password.length < 5) {
    console.log("Password must be at least 5 characters long");

    return false;
  }
  // Check for at least one number (0-9)
  const hasNumber = /\d/.test(password);

  // Check for at least one uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);

  // Check for at least one lowercase letter
  const hasLowerCase = /[a-z]/.test(password);

  // Check for at least one non-alphanumeric symbol (special characters)
  const nonAlphaNumericSymbol = /[!#$%.&*]/.test(password);

  // Check if password is already in the passwords array
  if (passwords.includes(password)) {
    console.log(
      "Password has been used previously. Please choose a different password."
    );
    return false;
  }

  // If all conditions are met, the password is valid
  if (hasLowerCase && hasUpperCase && hasNumber && nonAlphaNumericSymbol) {
    passwords.push(password); // Add the new password to the array
    return true;
  } else {
    console.log(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and at least one special character (!, #, $, %, ., *, &)"
    );

    return false;
  }
}

console.log(passwordValidator("787As8*"));
console.log(passwords.join(" _ "));
module.exports = passwordValidator;
