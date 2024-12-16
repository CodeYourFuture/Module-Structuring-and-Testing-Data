
// Password Validation

// Write a program that should check if a password is valid
// and returns a boolean(true or falsa)

// To be valid, a password must:
// - Have at least 5 characters.(I can use length or count)
// - Have at least one English uppercase letter (A-Z)()
// - Have at least one English lowercase letter (a-z)
// - Have at least one number (0-9)
// - Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
// - Must not be any previous password in the passwords array. 

// You must breakdown this problem in order to solve it. Find one test case first and get that working
// 

function isValidPassword(password, passwords) {
    if (password.length < 5) {
        return false;
    }

    
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    const specialChars = "!#$%.*&";

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }

        if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
            break;
        }
    }

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
        return false;
    }

    if (passwords.includes(password)) {
        return false;
    }

    return true;
}

module.exports = isValidPassword;
