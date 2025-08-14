function passwordValidator(password) {
    if (password.length < 5) return false;

    let previousPasswords = ["HelloWorld01#", "HelloWorld02$", "HelloWorld03%", "HelloWorld04.", "HelloWorld05*", "HelloWorld06&"];
        
    let hasSpecial = /[!#$%.*&]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasUpper = /[A-Z]/.test(password);

    if (!hasSpecial || !hasNumber || !hasLower || !hasUpper) {
        return false;
    }

    if (previousPasswords.includes(password)) {
        return false; 
    }

    return true; 
}

module.exports = passwordValidator;
