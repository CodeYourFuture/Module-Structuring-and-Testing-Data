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
    const password = "1a2B3$";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("password has at least 5 characters", () => {
    const password = "Ab1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("password has at least one uppercase letter", () => {
    const password = "ab1!x";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("password has at least one lowercase letter", () => {
    const password = "AB1!X";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("password has at least one number", () => {
    const password = "Abc!x";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("password has at least one symbol", () => {
    const password = "Abc12";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("password must not be used before", () => {
    const password = "Ab1!x";
    const previousPasswords = ["Ab1!x", "Xyz123!"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(false);
});

test("password must not be used before", () => {
    const password = "New1!";
    const previousPasswords = ["Ab1!x", "Xyz123!"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);
});

