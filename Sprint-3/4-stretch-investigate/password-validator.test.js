/*
Password Validator Test Cases

To verify the passwordValidator function, the following cases are tested:
*/

// Importing the function to test
const passwordValidator = require("./password-validator");

// Case 1: Password with at least 5 characters
test("should return true for password with at least 5 characters and all conditions met", () => {
    expect(passwordValidator("Abc1!")).toEqual(true);
});

// Case 2: Password too short
test("should return false if password has less than 5 characters", () => {
    expect(passwordValidator("A1!")).toEqual(false);
});

// Case 3: Missing uppercase letter
test("should return false if password lacks uppercase letter", () => {
    expect(passwordValidator("abc1!")).toEqual(false);
});

// Case 4: Missing lowercase letter
test("should return false if password lacks lowercase letter", () => {
    expect(passwordValidator("ABC1!")).toEqual(false);
});

// Case 5: Missing number
test("should return false if password lacks a number", () => {
    expect(passwordValidator("Abcde!")).toEqual(false);
});

// Case 6: Missing symbol
test("should return false if password lacks required symbol", () => {
    expect(passwordValidator("Abc12")).toEqual(false);
});

// Case 7: Password is in previousPasswords array
test("should return false if password is a previous password", () => {
    expect(passwordValidator("Pass123!")).toEqual(false);
});
