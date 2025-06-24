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
/*const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});*/

// Have at least 5 Character

test("password has at least 5 characters", () => {
    const password = "T2t!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

//Have at least one English uppercase letter (A-Z)

test("password has at least one uppercase letter", () => {
    const password = "test@12";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

//Have at least one English lowercase letter (a-z)

test("password has at least one lowercase letter", () => {
    const password = "TEST@WE12";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

//Have at least one number (0-9)

test("password has at least one number", () => {
    const password = "TEst@x!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

// Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")

test("password has at least one symbol", () => {
    const password = "Abc12";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

//Must not be any previous password in the passwords array. 

test("password must not be used before", () => {
    const password = "Test@123";
    const previousPasswords = ["Test@123", "Test123!"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(false);
});

test("password must not be used before", () => {
    const password = "New@Test@123!";
    const previousPasswords = ["Test@123", "Test123!"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);
});