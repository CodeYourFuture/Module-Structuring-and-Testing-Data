function passwordValidator(password, previousPasswords = []) {
    // Checks whether the password variable is a string
    if (typeof password !== 'string') return false;

    // Check length is at least a minimum of 5 characters long
    if (password.length < 5) return false;

    // Check for at least one uppercase letter A-Z
    if (!/[A-Z]/.test(password)) return false;

    // Check for at least one lowercase letter a-z
    if (!/[a-z]/.test(password)) return false;

    // Check for at least one number 0-9
    if (!/[0-9]/.test(password)) return false;

    // Check for at least one allowed special character: ! # $ % . * &
    if (!/[!#$%.*&]/.test(password)) return false;

    // Check that password is not in previousPasswords array 
    if (previousPasswords.includes(password)) return false;

    // If all checks pass, return true
    return true;
}

const previous = ["Letmein!", "Pass12", "Passw0rd!"];

/*
console.log(passwordValidator("A1a!1"));                  // should return true
console.log(passwordValidator("PaSS1!"));                 // true
console.log(passwordValidator("Pass12"));                 // false
console.log(passwordValidator("L£tmein1"));               // false (symbol not allowed)
console.log(passwordValidator("Passw0rd!", previous));    // false (in previousPasswords)
*/
module.exports = passwordValidator;