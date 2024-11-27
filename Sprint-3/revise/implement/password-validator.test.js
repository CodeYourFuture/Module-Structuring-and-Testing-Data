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

function isValidPassword(password, passwords = []) {
  if (password.length < 5) return false;

  const hasUpperCase = /[A-Z]/.test(password);
  if (!hasUpperCase) return false;

  const hasLowerCase = /[a-z]/.test(password);
  if (!hasLowerCase) return false;

  const hasNumber = /\d/.test(password);
  if (!hasNumber) return false;

  const hasSymbol = /[!#$%.&*]/.test(password);
  if (!hasSymbol) return false;

  const hasBeenUsed = passwords.includes(password);
  if (hasBeenUsed) return false;

  return true;
}

describe("Password Validation", () => {
  it("should return false for passwords with fewer than 5 characters", () => {
    expect(isValidPassword("aB1!")).toBe(false);
  });
  it("should return false for passwords without an uppercase letter", () => {
    expect(isValidPassword("abcde1!")).toBe(false);
  });
  it("should return false for passwords without a lowercase letter", () => {
    expect(isValidPassword("ABCDE1!")).toBe(false);
  });
  it("should return false for passwords without a number", () => {
    expect(isValidPassword("abcdeA!")).toBe(false);
  });
  it("should return false for passwords without a non-alphanumeric symbol", () => {
    expect(isValidPassword("abcdeA1")).toBe(false);
  });
  it("should return false for passwords that have been used before", () => {
    expect(isValidPassword("abcdeA1!", ["abcdeA1!"])).toBe(false);
  });
  it("should return true for valid passwords", () => {
    expect(isValidPassword("abcdeA2!")).toBe(true);
  });
});
