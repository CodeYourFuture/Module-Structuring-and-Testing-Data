
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
const previousPasswords = ["12345", "Password1", "password1", "12345678"];
test("password has at least 5 characters", () => {
    // Arrange
    const password = "passW5!";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);
test("password has at least one uppercase letter", () => {
    // Arrange
    const password = "Password1!";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});
test("password has at least one lowercase letter", () => {
    // Arrange
    const password ="PASSWORd!1"
    const result =isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});
test("password has at least one number" ,() => {
    // Arrange
    const password = "Passwor!9";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});
test("test has one of the special characters",() => {
    // Arrange
    const password = "Pass5*&";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
});
test("password is not from the previous passwords array", () => {
    // Arrange
    const previousPasswords = ["12345", "Password1", "password1", "12345678"];
    const password = "NewPassword1!";
    // Act
    const result = isValidPassword(password, previousPasswords);
    // Assert
    expect(result).toEqual(true);
});