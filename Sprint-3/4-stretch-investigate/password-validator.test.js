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
 // Assert
    
const passwordValidator= require("./password-validator");

  test("Password must be at least 5 characters long.", () => {
    expect(passwordValidator("St1!")).toBe(false);
});

  test("password with exactly 5 valid characters long", () => {
  expect(isValidPassword("Stg1!")).toBe(true);
});
  test("Password must include at least one uppercase letter.", () =>{
    expect(passwordValidator("strong1!")).toBe(false);
  } )
  
  test("Password must include at least one lowercase letter.", () =>{
    expect(passwordValidator("STRONG1")).toBe(false);
  } )
  
  test("Password must include at least one number.", () =>{
    expect(passwordValidator("Strong*")).toBe(false);
  } )

 test("Password must include at least one special symbol (!#$%.*&).", () =>{
    expect(passwordValidator("Strong2")).toBe(false);
  } )  

  test("This password has already been used. Please choose a new one.", () =>{
    expect(passwordValidator("Password123!")).toBe(false);
    
  })
