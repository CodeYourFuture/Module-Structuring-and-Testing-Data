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
const previousPasswords = ["Mmd1!", "XyZ2$", "Tes5%"];


test("password has at least 5 characters", () => {
  const password = "Ki55$";
  const result = isValidPassword(password, previousPasswords); // pass the array
  expect(result).toEqual(true);
});

test("password has at least one uppercase", () => {
  const password = "Uo85*";
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(true);npx
});

test("password has at least one lowercase", () => {
  const password = "Qf#45";
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(true);
});

test("password has at least one number", () => {
  const password = "Cz!35";
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(true);
});

test("password has at least one special symbol", () => {
  const password = "Re*19";
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(true);
});

test("password must not be a previous password", () => {
  const password = "Mmd1!"; 
  const result = isValidPassword(password, previousPasswords);
  expect(result).toEqual(false);

});


// In Password-validator.test.js cases tested and passed. 
