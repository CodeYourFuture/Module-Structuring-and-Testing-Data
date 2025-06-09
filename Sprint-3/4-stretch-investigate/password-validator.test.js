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
describe("passwordValidator",()=>{
test("password has at least 5 characters", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "pass";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(false);
}
);
test("at least one English uppercase letter (A-Z)", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "password1!";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(false);
}
);
test("Have at least one English lowercase letter (a-z)", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "PASSWORD1";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(false);
}
);
test("at least one of the following non-alphanumeric symbols", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "Password1";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(false);
}
);
test("Must not be any previous password in the passwords array", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "Password1!";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(false);
}
);
test("all criteria passed", () => {
    // Arrange
    const previous = ["Password1!", "Hello123$"];
    const password = "PasswordMine1!";
    // Act
    const result = isValidPassword(password,previous);
    // Assert
    expect(result).toEqual(true);
}
);
})
