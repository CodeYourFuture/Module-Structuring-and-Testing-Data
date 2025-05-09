/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.*
- Have at least one English uppercase letter (A-Z)*
- Have at least one English lowercase letter (a-z)*
- Have at least one number (0-9)*
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")*
- Must not be any previous password in the passwords array.* 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
const passwordValidator = require("./password-validator");

test("password has at least 5 characters", () => {
    const password = "12345";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(true); // Valid
});

test("password is too short", () => {
    const password = "123";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(false); // Invalid
});

test("password contains at least one uppercase letter", () => {
    const password = "Abcde1!";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(true); // Valid
});

test("password contains at least one lowercase letter", () => {
    const password = "ABCD1!";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(false); // Invalid
});

test("password contains at least one number", () => {
    const password = "Abcd!";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(false); // Invalid
});

test("password contains at least one special character", () => {
    const password = "Abcd123";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(false); // Invalid
});

test("password is in the previous passwords list", () => {
    const password = "12345";
    const previousPasswords = ["12345", "password123"];
    expect(passwordValidator(password, previousPasswords)).toEqual(false); // Invalid
});

test("valid password", () => {
    const password = "Abc123!";
    const previousPasswords = [];
    expect(passwordValidator(password, previousPasswords)).toEqual(true); // Valid
});
