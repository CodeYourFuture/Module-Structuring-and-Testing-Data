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
test("password has less than 5 characters", () => {
    // Arrange
    const password = "Aa0#";
    // Act
    const result1 = isValidPassword(password);
    // Assert
    console.log(result1)
    expect(result1).toEqual(false);
}
);
test("password has not upper case", () => {
    // Arrange
    const password = "helloworld02#";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);
test("password has not lower case", () => {
    // Arrange
    const password = "HELLOWORLD02#";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);
test("password has not number", () => {
    // Arrange
    const password = "HELLOWORLD#";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);
test("password has not non-alphanumeric symbols", () => {
    // Arrange
    const password = "HELLOWORLD02";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);
test("password is invalid for multiple conditions", () => {
    // Arrange
    const password = "HELLOWORLD";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);

test("password is invalid for multiple conditions", () => {
    // Arrange
    const password = "";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);

test("password is invalid for multiple conditions", () => {
    // Arrange
    const password = "helloworld";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);

test("password is invalid for multiple conditions", () => {
    // Arrange
    const password = "12345";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);

test("password is invalid for multiple conditions", () => {
    // Arrange
    const password = "!#$%.*&";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);


test("password has same password with previous", () => {
    // Arrange
    const password = "HelloWorld02$";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(false);
}
);
test("password has valid password", () => {
    // Arrange
    const password = "Aa0#3";
    // Act
    const result2 = isValidPassword(password);
    // Assert
    expect(result2).toEqual(true);
}
);
