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

function isValidPassword(password, previousPasswords = []) {
  //set the Default function parameters: allow named parameters to be initialized with default values if no value passed
  console.log(`password = ${password}`);
  console.log("previousPasswords =", previousPasswords);
  if (password.length < 5) {
    return false;
  }
  const upperCaseLetters = /[A-Z]/g;
  if (!password.match(upperCaseLetters)) {
    return false;
  }
  const lowerCaseLetters = /[a-z]/g;
  if (!password.match(lowerCaseLetters)) {
    return false;
  }
  if (!password.match(/[0-9]/g)) {
    return false;
  }
  if (!password.match(/[@.#$!%^&*.?]/g)) {
    return false;
  }

  if (previousPasswords.includes(password)) {
    return false;
  }
  return true;
}
const previousPasswords = ["Hello1@", "Samira2$", "Peter4*"];

console.log(isValidPassword("Lo5%"));

describe("isValidPassword", () => {
  test("Have at least 5 characters.", () => {
    expect(isValidPassword("Ho2@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(
      false
    );
  });
  test("Have at least one English uppercase letter (A-Z)", () => {
    expect(isValidPassword("hello0@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(false)
  })
  
  test("Have at least one English lowercase letter (a-z)", () => {
    expect(isValidPassword("HELLO2@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(
      false
    );
  });
  test("Have at least one number (0-9).", () => {
    expect(isValidPassword("Hello@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(
      false
    );
  });
  test("Must not be any previous password in the passwords array", () => {
    expect(isValidPassword("Hello1@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(
      false
    );
  });
  test("Have at least one non-alphanumeric symbol", () => {
    expect(isValidPassword("Hello2", ["Hello1@", "Samira2$", "Peter4*"])).toBe(
      false
    );
  });
  test("pass all the criteria with no previousPasswords", () => {
    expect(isValidPassword("Hello2@")).toBe(true);
  });
  test("with previous password in the array", () => {
    expect(isValidPassword("Hello1@", ["Hello1@", "Samira2$", "Peter4*"])).toBe(false);
  });
});


