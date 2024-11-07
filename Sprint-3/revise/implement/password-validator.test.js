const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");

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
  let passwordsArrey = ["ydt635RERE!¬", "hdud738+=sg", "bxv735@@ls0HG"];
  if (
    /[A-Z]/.test(pass) &&
    /[a-z]/.test(pass) &&
    pass.length >= 5 &&
    /\d/.test(pass) &&
    /\w/.test(pass) &&
    passwordsArrey.every((password) => password !== pass)
  )
    return "Valid Pasword!";
  else return "Invalid Password";
}
console.log(passwordValidation("ghqd43ghF~+"));
test("if the password is valid or invalid", () => {});
