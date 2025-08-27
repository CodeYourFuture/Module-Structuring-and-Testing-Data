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

describe("Password Validation Rules", () =>{
test("password has at least 5 characters", () => {
    // Arrange
    const password = "125";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
}
);

test("should return false if password has no uppercase letter", () => {
        const password = "abcdef";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

test("should return false if password meets length but lacks other criteria", () => {
        const password = "abcde";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

test("should return false if password has no lowercase letter", () => {
        const password = "ABCDEF";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
}
);

test("should return false if password has no number", () => {
        const password = "Abcdef";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
test("should return false if password has no allowed symbol", () => {
        const password = "Abcdef1";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });    

test("should return true if password has an allowed symbol", () => {
        const password = "Abcdef1!";
        const result = isValidPassword(password);
        expect(result).toEqual(true); 
    });

test("should return false if password contains a disallowed symbol", () => {
        const password = "MyP@ssw0rd?"; 
        const previousPasswords = [];
        const result = isValidPassword(password, previousPasswords);
        expect(result).toEqual(false);
    });

test("should return false if password is a previous password", () => {
        const previousPasswords = ["ValidP@ss1", "Another!P2"];
        const password = "ValidP@ss1"; 
        const result = isValidPassword(password, previousPasswords);
        expect(result).toEqual(false);
    });
})