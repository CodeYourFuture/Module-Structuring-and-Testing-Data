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

test("fails if only numbers are used", () => {
    const password = "12345";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("valid password passes all rules", () => {
    const password = "Good1!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
});

test("fails if password is too short", () => {
    const password = "A1!a";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if missing uppercase letter", () => {
    const password = "good1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if missing lowercase letter", () => {
    const password = "GOOD1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if missing number", () => {
    const password = "Good!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if missing symbol", () => {
    const password = "Good12";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if password is in oldPasswords list", () => {
    const password = "Password1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});