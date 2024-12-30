const passwordValidation = require("./password-validator");

describe("passwordValidation", () => {
  const existingPasswords = ["previousPass1", "previousPass2", "etetet"];

  test("valid password with all criteria", () => {
    expect(passwordValidation("Valid1!Test", existingPasswords)).toBe(true);
  });

  test("password too short", () => {
    console.log(passwordValidation("Short1!", existingPasswords)); // Debug output
    expect(passwordValidation("Smjffjf!9", existingPasswords)).toBe(true);
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
