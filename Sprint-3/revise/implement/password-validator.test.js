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

const passwordValidator = require("./password-validator");

const currentOutput = passwordValidator("Serna#2003");
const targetOutput = true;

test('This test will check if the password is valid according to the criteria given', () => {
    expect(currentOutput).toEqual(targetOutput);
})

// short password
const currentOutput1 = passwordValidator("Se&9");
const targetOutput1 = false;

test('This test will check if the password is invalid because it is too short', () => {
    expect(currentOutput1).toEqual(targetOutput1);
});

// no special character
const currentOutput2 = passwordValidator("Serna2003");
const targetOutput2 = false;

test('This test will check if the password is invalid because it is missing a special character', () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

// no number
const currentOutput3 = passwordValidator("Serna#");
const targetOutput3 = false;

test('This test will check if the password is invalid because it is missing a number', () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

// password is already in array
const currentOutput4 = passwordValidator("Serna#2003");
const targetOutput4 = false;

test('This test will check if the password is invalid because it was already used', () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

// no uppercase
const currentOutput5 = passwordValidator("serna#2003");
const targetOutput5 = false;

test('This test will check if the password is invalid because it is missing an uppercase letter', () => {
    expect(currentOutput5).toEqual(targetOutput5);
});
