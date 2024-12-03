let previousPasswords = [];

function isValidPassword(password) {
    // Check if the password has at least 5 characters
    if (password.length < 5) {
        return false;
    }

    // Check English uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check English lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check one number
    if (!/\d/.test(password)) {
        return false;
    }

    // Check if non-alphanumeric symbol
    if (!/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    // Check if previous password
    if (previousPasswords.includes(password)) {
        return false;
    }

    // Add password to list of previous passwords
    previousPasswords.push(password);

    
    return true;
}
module.exports = isValidPassword;

// i didnt take the pure TDD approach but did use the basic tests below to help create the function. i created the above tests after the function was written
// tests:
// const password1 = "C@nham9!!"; // should work
// const password2 = "C@nham9!!"; // Same password to test previousPasswords[]
// const password3 = "NewP@ssw0rd!"; //should work

// console.log(isValidPassword(password1));
// console.log(isValidPassword(password2));
// console.log(isValidPassword(password3));

