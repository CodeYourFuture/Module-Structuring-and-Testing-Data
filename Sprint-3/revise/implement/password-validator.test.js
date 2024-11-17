// Password Validation

// Write a program that should check if a password is valid
// and returns a boolean
function validatePassword(password, passwords) {
  // To be valid, a password must:
  // - Have at least 5 characters.
  if (password.length < 5) {
    return false;
  }

  // - Have at least one English uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // - Have at least one English lowercase letter (a-z)
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // - Have at least one number (0-9)
  if (!/\d/.test(password)) {
    return false;
  }
  // - Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }
  // - Must not be any previous password in the passwords array.
  if (passwords.includes(password)) {
    return false;
  }
  return true;
}
// You must breakdown this problem in order to solve it. Find one test case first and get that working

describe("validatePassword", () => {
  const previousPasswords = ["Abc1!", "Password123!@", "Welcome2023!"];

  test("should return true for a valid password not in previousPasswords", () => {
    const password = "NewPass1!";
    expect(validatePassword(password, previousPasswords)).toBe(true);
  });

  test("should return false for a password in previousPasswords", () => {
    const password = "Abc1!";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });

  test("should return false for a password without a special character", () => {
    const password = "NewPass11";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });

  test("should return false for a password without an uppercase letter", () => {
    const password = "newpass1!";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });

  test("should return false for a password without a lowercase letter", () => {
    const password = "NEWPASS1!";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });

  test("should return false for a password without a number", () => {
    const password = "NewPass!";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });

  test("should return false for a password shorter than 5 characters", () => {
    const password = "A1!";
    expect(validatePassword(password, previousPasswords)).toBe(false);
  });
});
