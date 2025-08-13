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
    const password = "Ab1!c";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
});

test("fails if less than 5 characters", () => {
    const password = "A1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails without uppercase letter", () => {
    const password = "ab1!c";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails without lowercase letter", () => {
    const password = "AB1!C";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails without number", () => {
    const password = "Ab!cd";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails without symbol", () => {
    const password = "Ab1cd";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});

test("fails if password is previously used", () => {
    const password = "Password123!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
});