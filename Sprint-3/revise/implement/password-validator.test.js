/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const passwordValidator = require("./passwordValidator");


test('Checks if password is valid', () => {
    const passwords =[];
    const currentOutput = passwordValidator("Bad@11.#You%", passwords);
    const targetOutput = true;

    expect(currentOutput).toBe(targetOutput);
});

test('Checks if password is already used', () => {
    const passwords = ["Si@#M3.pro!*z4"];
    const currentOutput = passwordValidator("Si@#M3.pro!*z4", passwords);
    const targetOutput = "Password is already used";

    expect(currentOutput).toBe(targetOutput);
});

test('Checks if password has at least 5 characters', () => {
    const passwords = [];
    const currentOutput = passwordValidator("B1@#", passwords);
    const targetOutput = false;

    expect(currentOutput).toBe(targetOutput);
});
