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
test("Password has at least 5 characters", () => {
    // Arrange
    const password = "Cc#1";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
); 
test("Have at least one English uppercase letter (A-Z)", () => {
    const password = "AaBb5%Cc#11Zz";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
); 
test("Have at least one English lowercase letter (a-z)", () => {
    const password = "AaBbCcZ2#z";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
); 
test("Have at least one number (0-9)", () => {
    const password = "1Aa0CcZz!Bb9";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
); 
test("Have at least one of the following non-alphanumeric symbols:", () => {
    const password = "Aa0Cc!ZzB#b9";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
); 
test("Must not be any previous password in the passwords array.", () => {
    const password = "Aa0Cc!ZzB#b9";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);