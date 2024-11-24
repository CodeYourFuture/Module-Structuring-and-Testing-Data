
/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean = true, false

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case 
first and get that working
*/

function isNumberValid(input) {
  if (typeof input === "number" && input >= 10000) {
    return true; // Have at least 5 characters.
  }

  if (typeof input === "string" && input.length === 1) {
    // Check if the input is a single character

    if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
      return true; // Check if it's a letter (uppercase or lowercase)
    }
    if (input >= "0" && input <= "9") {
      return true; // Check if it's a digit (0-9)
    }
    const specialCharacters = "!#$%&*."; // List of allowed special characters
    if (specialCharacters.includes(input)) {
      return true; // Check if it's a special character
    }
  }
  return false; // If none of the above checks passed, the input is not valid
}

// Examples of how the function works:
console.log(isNumberValid(15000)); // true (number >= 10000)
console.log(isNumberValid("A")); // true (single uppercase letter)
console.log(isNumberValid("z")); // true (single lowercase letter)
console.log(isNumberValid("5")); // true (single digit)
console.log(isNumberValid("*")); // true (special character)
console.log(isNumberValid("Hello")); // false (not valid)
console.log(isNumberValid(5000)); // false (number < 10000)
console.log(isNumberValid("!!")); // false (more than one character)


module.exports = isNumberValid;
