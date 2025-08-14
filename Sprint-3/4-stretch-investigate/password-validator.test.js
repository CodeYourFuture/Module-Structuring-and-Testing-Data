const isValidPassword = require("./password-validator");



/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
Done- Have at least 5 characters.
Done- Have at least one English uppercase letter (A-Z)
Done- Have at least one English lowercase letter (a-z)
Done- Have at least one number (0-9)
Done- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
Not Done yet- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

//Scenario 1: less than five character
test("password has at least 5 characters", () => {
    // Arrange
    const password = "1Aa!";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual('Your password should be at least 5 characters');
}
);

//Scenario 2: no uppercase letter
test("password should have at least one uppercase letter", () => {
    const password = "1a!@#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password should have at least one uppercase letter');
});

//Scenario 3: no lowercase letter
test("password should have at least one lowercase letter", () => {
    const password = "1A!@#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password should have at least one lowercase letter');
});

//Scenario 4: no number
test("password should have at least one number", () => {
    const password = "bAa!@#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password should have at least one number');
});

//Scenario 5: no non-alphanumeric symbol
test("password should have at least one of the following non-alphanumeric symbols: ('!', '#', '$', '%', '.', '*', '&')", () => {
    const password = "bAa123";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password should have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")');
});

// Scenario 6: updated password
test("Should return your password is updated", () => {

    const password = "bAa12#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password is updated successfully');
});

// Scenario 7: password has already been used
// I stuck here, the problem is that every time jest is run and call isValidPassword, but reset the passwords array to empty, so the password is always new, and the test is always passed.
// I tried to use a global variable to store the passwords array, but it didn't work either.
// I also tried to use a mock function to store the passwords array, but it didn't work either.
// I also created an external file to store the passwords array, and export it  in the test file (passwordStorage.js), which receive the validate password history, and import it in the test file, but it didn't work either.
test("Should return Your password has already been used", () => {
    const password = "bAa12#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password has already been used');
});

test("Should return Your password is updated successfully", () => {
    const password = "Hatef1#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password is updated successfully');
});



test("Should return Your password is updated successfully", () => {
    const password = "Hatef1#";
    const result = isValidPassword(password);
    expect(result).toEqual('Your password has already been used');
});



