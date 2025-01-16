const passwordValidation = require("./password-validator");

describe("Password Validation", () => {
  const existingPasswords = ["previousPass1", "previousPass2", "etetet"];

  test("valid password with all criteria", () => {
    expect(passwordValidation("Valid1!Test", existingPasswords)).toBe(true);
  });

  test("password too short", () => {
    expect(passwordValidation("Shor!", existingPasswords)).toBe(false);
  });

  test("password without uppercase letter", () => {
    expect(passwordValidation("lowercase1!", existingPasswords)).toBe(false);
  });

  test("password without lowercase letter", () => {
    expect(passwordValidation("UPPERCASE1!", existingPasswords)).toBe(false);
  });

  test("password without number", () => {
    expect(passwordValidation("NoNumbers!", existingPasswords)).toBe(false);
  });

  test("password without special character", () => {
    expect(passwordValidation("Valid1Test", existingPasswords)).toBe(false);
  });

  test("password matches an existing password", () => {
    expect(passwordValidation("previousPass1", existingPasswords)).toBe(false);
  });
});
