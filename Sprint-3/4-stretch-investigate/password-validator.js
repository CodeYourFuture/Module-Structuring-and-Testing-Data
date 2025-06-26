function passwordValidator(password) {
    if (password.length < 5) return false;

    let previousPasswords = ["HelloWorld01#", "HelloWorld02$", "HelloWorld03%", "HelloWorld04.", "HelloWorld05*", "HelloWorld06&"];
    let specials = ["!", "#", "$", "%", ".", "*", "&"];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // Build alphabet arrays manually
    let smallLetters = [];
    let upperLetters = [];

    for (let i = 65; i <= 90; i++) {
        upperLetters.push(String.fromCharCode(i)); // A-Z
    }

    for (let i = 97; i <= 122; i++) {
        smallLetters.push(String.fromCharCode(i)); // a-z
    }

    // Check if password contains at least one of each required character type
    let hasSpecial = password.split('').some(char => specials.includes(char));
    let hasNumber = password.split('').some(char => numbers.includes(char));
    let hasLower = password.split('').some(char => smallLetters.includes(char));
    let hasUpper = password.split('').some(char => upperLetters.includes(char));

    if (!hasSpecial || !hasNumber || !hasLower || !hasUpper) {
        return false;
    }

    // Check password is not in the previous passwords list
    if (previousPasswords.includes(password)) {
        return false; // Should not allow reusing old passwords
    }

    return true; // Passed all checks
}

module.exports = passwordValidator;
