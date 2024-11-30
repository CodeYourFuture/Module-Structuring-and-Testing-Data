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


// List of previously used passwords
const passwords = ["My123*", "password1", "CYF2024!"];

function isValidPassword(password) {

  // Check if password is at least 5 characters long
  if (password.length < 5) {
    return false;
  }

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  // Loop through each character in the password
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    // Check if the password has an uppercase letter
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }
    // Check if the password has an lowercase letter
    if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    }
    // Check if the password has a number
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    }
    // Check if the password has a special character
    if (['!', '#', '$', '%', '.', '*', '&'].includes(char)) {
      hasSpecialChar = true;
    }
  }

  // If any required condition is not met, return false
  if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    return false;
  }

  // Check if the password has been used before
  if (passwords.includes(password)) {
    return false;
  }

  // If all checks pass, the password is valid
  return true;
}

// Test the function
let testPassword = "NewPassword1!";
console.log(isValidPassword(testPassword)); // true 

testPassword = "My123*";
console.log(isValidPassword(testPassword)); // false, previously used 

testPassword = "Ne1*";
console.log(isValidPassword(testPassword)); // false, only has 4 characters 

testPassword = "myword1!"; 
console.log(isValidPassword(testPassword)); // //false, does not include uppercase 

testPassword = "NewPassword!";
console.log(isValidPassword(testPassword)); // false, does not include number 

testPassword = "NewPassword1";
console.log(isValidPassword(testPassword)); // false, does not include special character 

