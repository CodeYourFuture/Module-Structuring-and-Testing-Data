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
test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345Dpw%";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);
test("password has at least 5 characters", () => {
  const password = "1234";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});



test("password has at least one English uppercase letter (A-Z)",()=>{
    const password ="12345Aaoe$"
    const result=isValidPassword(password)
    expect(result).toEqual(true)

});
test("password has at least one English uppercase letter (A-Z)", () => {
  const password = "12345";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});


test("password has at least one English lower case letter (a-z)", () => {
  const password = "S12345h#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
test("password has at least one English lower case letter (a-z)", () => {
  const password = "S12345P";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password has at least one number (0-9)", () => {
  const password = "123456Aa%";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
test("password has at least one number (0-9)", () => {
  const password = "sgjjkdAa";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password has at least one of the following non-alphanumeric symbols: (!, #, $, %, ., *, &)", () => {
  const password = "123Spdfe!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
test("password has at least one of the following non-alphanumeric symbols: (!, #, $, %, ., *, &)", () => {
  const password = "123Spdfe";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});


//don't know how to check if the password was used before, do i need to create a passwords array?