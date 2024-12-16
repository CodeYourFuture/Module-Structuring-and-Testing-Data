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

const {passwordValidator} = require('./password.validator');
describe ("passwordValidator function", () => {

//Typical cases

test("should return false if input is less than 5 characters", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("Tree", previousPasswords)).toBe(false);
    expect(passwordValidator("1234", previousPasswords)).toBe(false);
}); 

test("should return false if input does not contain an uppercase letter", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("watermelon", previousPasswords)).toBe(false);
    expect(passwordValidator("56789", previousPasswords)).toBe(false);
}); 

test("should return false if input does not contain a lowercase letter", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("TELEVISION", previousPasswords)).toBe(false);
    expect(passwordValidator("01010101010", previousPasswords)).toBe(false);
}); 

test("should return false if input does not contain a number between 0-9", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("Doorway", previousPasswords)).toBe(false);
    expect(passwordValidator("22446688", previousPasswords)).toBe(false);
}); 

test("should return false if input does not contain a special character from !#$%.*&", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("Soccerball17", previousPasswords)).toBe(false);
    expect(passwordValidator("17soccerBall", previousPasswords)).toBe(false);
}); 


test("should return false if input matches a previous password", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("Access1!Point", previousPasswords)).toBe(false);
    expect(passwordValidator("passWord55@", previousPasswords)).toBe(false);
}); 

test("should return true if all conditions are met", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("CandyFloss88%", previousPasswords)).toBe(true);
    expect(passwordValidator("99Red&Balloons", previousPasswords)).toBe(true);
}); 

test("should return false if password is valid but matches a previous password", () => {
    const previousPasswords = ["passWord55@", "Access1!Point", "#MarioBros3"]
    expect(passwordValidator("#MarioBros3", previousPasswords)).toBe(false);
}); 

});