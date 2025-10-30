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

// passsword has at least one uppercase letter
test("password has at least one uppercase letter", () => {

    const password = "abcd!1";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);

// password has at least one lowercase letter
test("password has at least one lowercase letter", () => {

    const password = "ABCD!1";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);

// password has at least one number
test("password has at least one number", () => {

    const password = "Abcd!@";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);

// password has at least one symbol: 
test("password has at least one symbol: (!, #, $, %, ., *, &)", () => {

    const password = "abcd!1";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);

// password must not be any previous password in the passwords array.   
test("password must not be any previous password in the passwords array.", () => {

    const password = "abcd!1"; 
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);
// password is valid when all requirements are met
test ("password is valid when it meets all requirements",() =>{ 
    
    const password = "Abcd!2";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
}
);
