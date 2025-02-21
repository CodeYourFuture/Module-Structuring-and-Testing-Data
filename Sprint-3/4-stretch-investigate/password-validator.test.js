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
const passwordValidator = require("./password-validator");

test("password has at least 5 characters", () => {
    const password = "12345";
    const result = passwordValidator(password);
    expect(result).toEqual(true);
});

test("password contains at least one uppercase letter", () => {
    const password = "123A5";  // Contains uppercase "A"
    const result = passwordValidator(password);
    expect(result).toBe(true);
});

test("password contains at least one lowercase letter", () => {
    const password = "123a5";  // Contains lowercase "a"
    const result = passwordValidator(password);
    expect(result).toBe(true);
});

test("password contains at least one number", () => {
    const password = "aA!12";  // Contains number "1"
    const result = passwordValidator(password);
    expect(result).toBe(true);
});

test("password contains at least one special character", () => {
    const password = "aA!12";  // Contains special character "!"
    const result = passwordValidator(password);
    expect(result).toBe(true);
});

test("password has not been used before", () => {
    const password = "previousPassword1";  // A previously used password
    const result = passwordValidator(password);
    expect(result).toBe(false);
});

