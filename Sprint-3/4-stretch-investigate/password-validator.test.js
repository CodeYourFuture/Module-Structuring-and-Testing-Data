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

test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
   const result = isValidPassword(password);
    // Assert
    expect(result).toBe(true);
}
);


 test("password has at least 5 characters", () => {
  expect(isValidPassword("12345")).toBe(false); // Fails because no letters or special chars
});

test("password has at least one uppercase letter", () => {
  expect(isValidPassword("password1!")).toBe(false); // No uppercase letter
});

test("password has at least one lowercase letter", () => {
  expect(isValidPassword("PASSWORD1!")).toBe(false); // No lowercase letter
});

test("password has at least one number", () => {
  expect(isValidPassword("Password!")).toBe(false); // No number
});

test("password has at least one special character", () => {
  expect(isValidPassword("Password1")).toBe(false); // No special character
});

test("password should not be a previously used password", () => {
  expect(isValidPassword("Password123!")).toBe(false); // Used before
});

test("valid password", () => {
  expect(isValidPassword("Valid1!")).toBe(true); // Meets all conditions
});