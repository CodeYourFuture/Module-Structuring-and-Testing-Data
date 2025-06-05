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

describe("passwordValidator Tests", () => {
  describe("Valid Password Tests", () => {
    test("Passwords that match all the criteria, no previous passwords", () => {
      const password = "Password12#";
      const result = isValidPassword(password);
      expect(result).toEqual(true);
    });

    test("Passwords that match all the criteria, 1 previous passwords", () => {
      const password = "Password12#";
      const prevPW = ["P@ssword12#"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(true);
    });

    test("Passwords that match all the criteria, 2 previous passwords", () => {
      const password = "Password12#";
      const prevPW = ["P@ssword12#", "PasswOrd12#"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(true);
    });
  });

  describe("Invalid Password Tests", () => {
    test("Passwords that does not match all the criteria, no previous passwords", () => {
      const password = "pass";
      const result = isValidPassword(password);
      expect(result).toEqual(false);
    });

    test("Passwords that does not match all the criteria, 1 previous passwords that does't match", () => {
      const password = "password123";
      const prevPW = ["rAndom54$"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(false);
    });

    test("Passwords that does not match all the criteria, 2 previous passwords that don't match", () => {
      const password = "password123";
      const prevPW = ["oldAge3$", "bR!ck23"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(false);
    });

    test("Passwords has correct format and 1 previous passwords matches", () => {
      const password = "oldAge3$";
      const prevPW = ["oldAge3$"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(false);
    });

    test("Passwords has correct format and 1 of 2 previous passwords match", () => {
      const password = "Password12#";
      const prevPW = ["P@ssword12#", "Password12#"];
      const result = isValidPassword(password, prevPW);
      expect(result).toEqual(false);
    });
  });
});
