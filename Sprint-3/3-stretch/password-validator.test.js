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
    const password = "Ab1!c";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});

// Test minimum length
test("should return false for password with less than 5 characters", () => {
    expect(isValidPassword("Ab1!")).toEqual(false);
});

// Test uppercase requirement
test("should return false for password without uppercase", () => {
    expect(isValidPassword("abc12!")).toEqual(false);
});

// Test lowercase requirement  
test("should return false for password without lowercase", () => {
    expect(isValidPassword("ABC12!")).toEqual(false);
});

// Test number requirement
test("should return false for password without number", () => {
    expect(isValidPassword("Abcde!")).toEqual(false);
});

// Test special character requirement
test("should return false for password without special character", () => {
    expect(isValidPassword("Abcde1")).toEqual(false);
});

// Test valid password
test("should return true for valid password", () => {
    expect(isValidPassword("Valid1!")).toEqual(true);
});