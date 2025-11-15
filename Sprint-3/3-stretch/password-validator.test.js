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

// 
test("password has at least one English uppercase letter (A-Z)", () => {
    // Arrange
    const password = "A2345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

//
test("password has least one English lowercase letter (a-z)", () => {
    // Arrange
    const password = "Da2345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

// 
test("password has at least one number 0-9)", () => {
    // Arrange
    const password = "Cz!345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("password has at least one non-alphanumeric symbols: !, #, $, %, ., *, &)", () => {
    // Arrange
    const password = "Cz!345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

// 
test("password must not be a previous password", () => {
  const previousPasswords = ["Mmd1!", "XyZ2$", "Test10%"];
  const password = "Mmd1"; 
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(false);
});

// Password-validator implemented and tested.