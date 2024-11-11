//const { default: test } = require("node:test");
//const { hasUncaughtExceptionCaptureCallback } = require("process");

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
function passwordValidation(pass) {
  let bannedPasswords = ["ydt635RERE!!", "hdud738#&sg", "bxv735#$ls0HG"];
  if (
    /[A-Z]/.test(pass) &&
    /[a-z]/.test(pass) &&
    pass.length >= 5 &&
    /[0-9]/.test(pass) &&
    /[!#$%.*&]/.test(pass) &&
    bannedPasswords.every((password) => password !== pass) &&
    !/[" ")(£`¬|\\]/.test(pass)
  )
    return "Valid Password!";
  else return "Invalid Password";
}
it("should allow valid passwords", () => {
  expect(passwordValidation("gah45SA!")).toBe("Valid Password!");
  expect(passwordValidation("gah45SA#")).toBe("Valid Password!");
});
it("should not allow invalid password", () => {
  expect(passwordValidation("hssssgdwu")).toBe("Invalid Password");
  expect(passwordValidation("DDTTUOLH")).toBe("Invalid Password");
  expect(passwordValidation("$.*!$£")).toBe("Invalid Password");
  expect(passwordValidation("165875584")).toBe("Invalid Password");
  expect(passwordValidation("Lo 5#j")).toBe("Invalid Password");
  expect(passwordValidation("L2m()!")).toBe("Invalid Password");
  expect(passwordValidation("1`\\UYgs")).toBe("Invalid Password");
});
it("should not be less than 5 digits", () => {
  expect(passwordValidation("hs3Q")).toBe("Invalid Password");
  expect(passwordValidation("")).toBe("Invalid Password");
});

it("should haves at least one English upper Case letter", () => {
  expect(passwordValidation("hs.3Q")).toBe("Valid Password!");
  expect(passwordValidation("hs&34")).toBe("Invalid Password");
});

it("should have at least one English lower Case letter", () => {
  expect(passwordValidation("hX$3Q")).toBe("Valid Password!");
  expect(passwordValidation("LK#34")).toBe("Invalid Password");
});
it("should have at least one number", () => {
  expect(passwordValidation("hX!3Q")).toBe("Valid Password!");
  expect(passwordValidation("LK#vg")).toBe("Invalid Password");
});

it("should have at least one non-alphanumeric symbol", () => {
  expect(passwordValidation("&esAZ6")).toBe("Valid Password!");
  expect(passwordValidation("LK98vg")).toBe("Invalid Password");
});
it("should not be from previous passwords", () => {
  expect(passwordValidation("ydt635RERE!!")).toBe("Invalid Password");
  expect(passwordValidation("hdud738#&sg")).toBe("Invalid Password");
  expect(passwordValidation("bxv735#$ls0HG")).toBe("Invalid Password");
});
