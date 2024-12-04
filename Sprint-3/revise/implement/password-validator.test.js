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


test('Checks if password has at least one English uppercase letter (A-Z)', () => {
    const passwords =[];
    expect(passwordValidator("Bad@11.#YoZ%", passwords)).toBe(true);
});

test('Checks if password has at least one English lowercase letter (a-z)', () => {
    const passwords =[];
    expect(passwordValidator("Bad@11.#Yzu%", passwords)).toBe(true);
});

test('Checks if password has at least one number (0-9)', () => {
    const passwords =[];
    expect(passwordValidator("Ba0@1x.#Y9u%", passwords)).toBe(true);
});

test('Checks if password has at least one of the following non-alphanumeric symbols:("!", "#", "$", "%", ".", "*", "&")', () => {
    const passwords =[];
    expect(passwordValidator("Ba0@1x.#Y9u%", passwords)).toBe(true);
});

test('Checks if password is already used', () => {
    const passwords = ["Si@#M3.pro!*z4"];
    expect(passwordValidator("Si@#M3.pro!*z4", passwords)).toBe("Password is already used");
});

test('Checks if password has at least 5 characters', () => {
    const passwords = [];
    expect(passwordValidator("B1@a", passwords)).toBe(false);
});

test('Checks if password has only a digit missing', () => {
    const passwords = [];
    expect(passwordValidator("BlubaRule.s@", passwords)).toBe(false);
});

test('Checks if password is missing only an alphanumeric character', () => {
    const passwords = [];
    expect(passwordValidator("*#$!&.^@", passwords)).toBe(false);
});
