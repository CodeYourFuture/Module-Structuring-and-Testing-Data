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
    expect(result).toEqual(true);
}
);
// instruction 2 
const isValidPassword = require("./password-validator");
test("password has least one uppercase letter", () => {
    // arrange 
    const uppercase = "A -Z";
    // act 
    const result = isValidPassword(uppercase);
    // assert
    expect(result).toEqual(true);
});
  
// instruction 3
const isValidPassword = require("./password-validator");
test("password has least one lowercase letter", () => {
    // arrange
    const lowercase = "a-z";
    // act 
    const result = isValidPassword(lowercase);
    // assert
    expect(result).toEqual(true);
});
  
// instruction 4
const isValidPassword = require("./password-validator");
test("password has least one number", () => {
    // arrange
    const number = "0-9";
    // act 
    const result = isValidPassword(number);
    // assert
    expect(result).toEqual(true);
});
  
// instruction 5
const isValidPassword = require("./password-validator");
test("password has least one non-alphanumeric symbol", () => {
    // arrange
    const symbol = "!#$%.*&";
    // act 
    const result = isValidPassword(symbol);
    // assert
    expect(result).toEqual(true);
}); 