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
const passwordValidator = require("./password-validator");
test("password has at least 5 characters", () => {
    expect(passwordValidator('q2e!Q')).toEqual(true);
    expect(passwordValidator('2e!Q')).toEqual(false);
});

test("password has to have at least one English uppercase letter (A-Z)", () => {
    // Act
    const result = passwordValidator('q2e!q');
    // Assert
    expect(result).toEqual(false);
});

test("password has to have at least one English lowercase letter (a-z)", () => {
    // Act
    const result = passwordValidator('Q2E!Q');
    // Assert
    expect(result).toEqual(false);
});

test("password has to have at least one number (0-9)", () => {
    // Act
    const result = passwordValidator('qwe!Q');
    // Assert
    expect(result).toEqual(false);
});

test("password has to have at least one of the following non-alphanumeric symbols: !#$%.*&", () => {
    // Act
    const result = passwordValidator('qwei1Q');
    // Assert
    expect(result).toEqual(false);
});