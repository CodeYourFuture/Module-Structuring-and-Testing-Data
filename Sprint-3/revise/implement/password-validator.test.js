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

function passwordValidation (password, passwords){
    const haveMinLength = password.length >= 5;
    const haveUpperCase = /[A-Z]/.test(password);
    const haveLowerCase = /[a-z]/.test(password);
    const haveNumber = /\d/.test(password);
    const haveSymbol = /[!#$%.*&]/.test(password);
    const isNewPassword = !passwords.includes(password);

    return ( haveLowerCase &&
    haveMinLength &&
    haveNumber &&
    haveSymbol && 
    haveUpperCase &&
    isNewPassword);
}

// test case

describe("passwordValidation", () => {
  const previousPasswords = ["Password5!", "Secure$823", "HelloWorld#4"];

  test("returns true for valid new password", () => {
    expect(passwordValidation("NewPass1!", previousPasswords)).toBe(true);
  });

  test("returns false for a reused password", () => {
    expect(passwordValidation("Secure$823", previousPasswords)).toBe(false);
  });

  test("returns false for a password that's too short", () => {
    expect(passwordValidation("short", previousPasswords)).toBe(false);
  });

  test("returns false for a password without a number", () => {
    expect(passwordValidation("NoNumberOrSymbol!", previousPasswords)).toBe(
      false
    );
  });

  test("returns false for a password without a symbol", () => {
    expect(passwordValidation("Only12345", previousPasswords)).toBe(false);
  });

  test("returns false for a password without uppercase letters", () => {
    expect(passwordValidation("lowercase1!", previousPasswords)).toBe(false);
  });

  test("returns false for a password without lowercase letters", () => {
    expect(passwordValidation("UPPERCASE1!", previousPasswords)).toBe(false);
  });

  test("returns true for a valid password with special characters", () => {
    expect(passwordValidation("Valid1#Pass", previousPasswords)).toBe(true);
  });
});
