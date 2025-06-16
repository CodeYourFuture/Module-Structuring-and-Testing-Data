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

// Case 1: password has at least 5 characters (but fails other requirements)
test("password has at least 5 characters", () => {
    const password = "12345"; // Too simple, missing other criteria
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

// Case 2: password has at least one uppercase letter
test("password has at least one uppercase letter", () => {
    const password = "Password1!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
});

// Case 3: password has at least one lowercase letter
test("password has at least one lowercase letter", () => {
    const password = "PASSWORD1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

// Case 4: password has at least one number
test("password has at least one number", () => {
    const password = "Password!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

// Case 5: password has at least one special character
test("password has at least one special character", () => {
    const password = "Password1";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

// Case 6: password is not in the previous passwords array
test("password is not in the previous passwords array", () => {
    const password = "NewPassword1!";
    const previousPasswords = ["12345", "Password1!", "Test@123"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);
});

// Case 7: password is in the previous passwords array
test("password is in the previous passwords array", () => {
    const password = "Test@123";
    const previousPasswords = ["12345", "Password1!", "Test@123"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(false);
});

// Case 8: valid password with all conditions met
test("valid password with all conditions met", () => {
    const password = "Valid1!Password";
    const previousPasswords = ["12345", "Password1!", "Test@123"];
    const result = isValidPassword(password, previousPasswords);
    expect(result).toEqual(true);
});