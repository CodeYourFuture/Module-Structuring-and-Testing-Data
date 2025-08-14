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

const isValidPassword = require("./password-validator");
// I have decided to use an array for the test cases to keep code clear and ensuring DRY code.
const testCases = [
  // uses the format of "description, password, previousPasswords, expectedResult" in the array
  ["password has less than 5 characters", "123!", [], false],
  ["password does not have an English uppercase letter", "1234*abc", [], false],
  ["password does not have a number", "Abcdef&", [], false],
  ["password does not have a non-alphanumeric character", "Abc123", [], false],
  [
    "password is in previous passwords array",
    "Abcde3!",
    ["Abcde1!", "Abcde2!"],
    true,
  ],
  ["password is undefined", undefined, [], false],
  ["password is null", null, [], false],
  ["password is a number", 123456, [], false],
  ["password is an array", ["Abc123!"], [], false],
  ["password is an object", { pass: "Abc123!" }, [], false],
  ["password is an empty string", "", [], false],
  [
    "valid password that passes all checks",
    "1234*Abc",
    ["Password1!", "Zyx987*"],
    true,
  ],
];
// for each test of tes cases it takes the inputs of the array and then runs the test.
testCases.forEach(([description, password, previousPasswords, expected]) => {
  test(description, () => {
    // Act and Assert
    expect(isValidPassword(password, previousPasswords)).toEqual(expected);
  });
});
