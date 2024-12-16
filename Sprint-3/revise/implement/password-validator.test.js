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

const validationRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%.*&])[A-Za-z\d!#$%.*&]{5,}$/;

function validatePassword(password, previousPasswords = []) {
  let previousPW = previousPasswords;
  if (validationRegex.test(password) && !previousPW.includes(password)) {
    previousPasswords.push(password);
    return true;
  }
  return false;
}

describe("# validatePassword Tests", () => {
  describe("## Valid passwords", () => {
    test.each(["Password#123"])("Have at least 5 characters: %s 👍", (pw) => {
      expect(validatePassword(pw)).toBe(true);
    });

    test.each(["javaScript.v1"])(
      "Have at least one English uppercase letter: %s 👍",
      (pw) => {
        expect(validatePassword(pw)).toBe(true);
      }
    );

    test.each(["ATLeAST*1"])(
      "Have at least one English lowercase letter (a-z): %s 👍",
      (pw) => {
        expect(validatePassword(pw)).toBe(true);
      }
    );

    test.each(["1!Number"])("Have at least one number (0-9): %s 👍", (pw) => {
      expect(validatePassword(pw)).toBe(true);
    });

    test.each(["1$ymBol"])(
      "At least one of the following symbols ('!','#','$','%','.','*','&'): %s 👍",
      (pw) => {
        expect(validatePassword(pw)).toBe(true);
      }
    );

    test.each`
      pw           | previousPW
      ${"NewPw1%"} | ${["PreviousPw1%"]}
    `(
      "Not a previous password: $previousPW Input: $pw   👍",
      ({ pw, previousPW }) => {
        expect(validatePassword(pw, previousPW)).toBe(true);
      }
    );
  });

  describe("## Invalid passwords", () => {
    test.each(["Pw#1"])("Have at least 5 characters: %s 👎", (pw) => {
      expect(validatePassword(pw)).toBe(false);
    });

    test.each(["html.v1"])(
      "Have at least one English uppercase letter: %s 👎",
      (pw) => {
        expect(validatePassword(pw)).toBe(false);
      }
    );

    test.each(["NOCAP%69"])(
      "Have at least one English lowercase letter (a-z): %s 👎",
      (pw) => {
        expect(validatePassword(pw)).toBe(false);
      }
    );

    test.each(["No!Number"])("Have at least one number (0-9): %s 👎", (pw) => {
      expect(validatePassword(pw)).toBe(false);
    });

    test.each(["nosymBo1"])(
      "At least one of the following symbols ('!','#','$','%','.','*','&'): %s 👎",
      (pw) => {
        expect(validatePassword(pw)).toBe(false);
      }
    );

    test.each`
      pw                | previousPW
      ${"PreviousPw1%"} | ${["PreviousPw1%"]}
    `(
      "Not a previous password: $previousPW Input: $pw   👎",
      ({ pw, previousPW }) => {
        expect(validatePassword(pw, previousPW)).toBe(false);
      }
    );
  });
});
