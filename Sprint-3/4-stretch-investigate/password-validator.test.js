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
    expect(result).toEqual(false);
}
);


test("Have at least one English uppercase letter", () => {
    // Arrange
    const password = "A12345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);

// Have at least one English lowercase letter (a-z)

test("Have at least one English lowercase letter (a-z)", () => {
    // Arrange
    const password = "A12345a";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);

// Have at least one number (0-9)


test("Have at least one number (0-9)", () => {
    // Arrange
    const password = "A12345a";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);

// Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")


test("Have at least one non-alphanumeric symbols", () => {
    // Arrange
    const password = "A12345a#";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

// Must not be any previous password in the passwords array.


test("Have at least one English uppercase letter", () => {
    // Arrange
    const password = "A12345a#";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);