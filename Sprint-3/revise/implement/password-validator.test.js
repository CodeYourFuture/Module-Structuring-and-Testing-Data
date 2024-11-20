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

function isValidPassword(password, passwords) {
    console.log('Password:', password);  // Debugging the current password being checked

    if (password.length < 5) {
        console.log('Password is too short');
        return false;  // Invalid if password is too short
    }
  
    if (!/[A-Z]/.test(password)) {
        console.log('Password lacks uppercase letter');
        return false;  // Invalid if no uppercase letter
    }
  
    if (!/[a-z]/.test(password)) {
        console.log('Password lacks lowercase letter');
        return false;  // Invalid if no lowercase letter
    }
  
    if (!/[0-9]/.test(password)) {
        console.log('Password lacks number');
        return false;  // Invalid if no number
    }
  
    if (!/[!#$%.*&]/.test(password)) {
        console.log('Password lacks special character');
        return false;  // Invalid if no special character
    }
  
    if (passwords.includes(password)) {
        console.log('Password is a duplicate');
        return false;  // Invalid if password is a duplicate
    }
  
    // If all checks pass, the password is valid
    return true;
}

// Running the password validation tests
console.log(isValidPassword("abc", ["password123", "password@2024"]));  // false (too short)
console.log(isValidPassword("password123", ["password123", "password@2024"]));  // false (lacks uppercase)
console.log(isValidPassword("password@2024", ["password123", "password@2024"]));  // false (duplicate)
console.log(isValidPassword("2024", ["password123", "password@2024"]));  // false (too short)
console.log(isValidPassword("Valid@2024", ["password123", "password@2024"]));  // true

// Running the test cases (TDD)
test('Password is too short', () => {
    expect(isValidPassword("abc", ["password123", "password@2024"])).toBe(false);
});

test('Password lacks an uppercase letter', () => {
    expect(isValidPassword("password123", ["password123", "password@2024"])).toBe(false);
});

test('Password lacks a lowercase letter', () => {
    expect(isValidPassword("PASSWORD123", ["password123", "password@2024"])).toBe(false);
});

test('Password lacks a number', () => {
    expect(isValidPassword("TestPassword@", ["password123", "password@2024"])).toBe(false);
});

test('Password lacks a special character', () => {
    expect(isValidPassword("TestPassword123", ["password123", "password@2024"])).toBe(false);
});

test('Password is a duplicate', () => {
    expect(isValidPassword("password@2024", ["password123", "password@2024"])).toBe(false);
});

test('Password is valid', () => {
    expect(isValidPassword("Valid@2024", ["password123", "password@2024"])).toBe(false);
});

test('Password is valid with minimum length', () => {
    expect(isValidPassword("go@1d", ["password123", "password@2024"])).toBe(false);
});
