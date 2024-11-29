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

function isPasswordValid(password, prePasswords) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%.*&]).{5,}$/;

  if (!regex.test(password)) {
    return false;
  }

  if (prePasswords.includes(password)) {
    return false;
  }

  return true;
}
const prePasswords = ["OldPass1!", "123abc!", "Password$"];

console.assert(
  isPasswordValid("Lu@#2024", prePasswords) === true,
  "Test Case 1 Failed"
);
console.assert(
  isPasswordValid("OldPass1!", prePasswords) === false,
  "Test Case 2 Failed"
);
console.assert(
  isPasswordValid("Lu@1!", prePasswords) === true,
  "Test Case 3 Failed"
);
console.assert(
  isPasswordValid("Lu12345", prePasswords) === true,
  "Test Case 4 Failed"
);
console.assert(
  isPasswordValid("Luuu@#", prePasswords) === true,
  "Test Case 5 Failed"
);
console.assert(
  isPasswordValid("lu@#2024", prePasswords) === true,
  "Test Case 6 Failed"
);
console.assert(
  isPasswordValid("LU@#2024", prePasswords) === true,
  "Test Case 7 Failed"
);
