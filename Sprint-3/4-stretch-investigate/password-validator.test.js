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
const previousPasswords = ["A1b!23", "OldPass1!"];

test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("password is missing an upperCase letter", () => {
    // Arrange
    const password = "12345a!";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("password is missing an lowerCase letter", () => {
    // Arrange
    const password = "123A!B";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("password is missing a number", () => {
    // Arrange
    const password = "abcde!";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("password is missing a special character", () => {
    // Arrange
    const password = "abcd123";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("password should not be in previous password list", () => {
    // Arrange
    const password = "A1b!23";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(false);
}
);

test("valid password meets all criteria", () => {
    // Arrange
    const password = "Hello12!3";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(true);
}
);