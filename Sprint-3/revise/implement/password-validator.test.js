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
const passwordValidation = require("./password-validator");
describe("passwordValidation", () => {
  let existingPasswords = ["password123", "Qwerty1!"]; // Example existing passwords

  it("should return false if password is already in existingPasswords list", () => {
    expect(passwordValidation("password123")).toBe(false); // Password already exists
  });
  it("should return return is equal to 5 characters", () => {
    expect(passwordValidation("A3$bP")).toBe(true); // Password already exists
  });
  it("should return false if password is less than or equal to 5 characters", () => {
    expect(passwordValidation("abc12")).toBe(false); // Too short
  });

  it("should return false if password does not contain an uppercase letter", () => {
    expect(passwordValidation("lowercase1!")).toBe(false); // Missing uppercase letter
  });

  it("should return false if password does not contain a lowercase letter", () => {
    expect(passwordValidation("UPPERCASE1!")).toBe(false); // Missing lowercase letter
  });

  it("should return false if password does not contain a number", () => {
    expect(passwordValidation("NoNumbers!")).toBe(false); // Missing number
  });

  it("should return false if password does not contain a symbol", () => {
    expect(passwordValidation("NoSymbol123")).toBe(false); // Missing symbol
  });
});
