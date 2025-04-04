function passwordValidator(password, passwords = []) {
    if (password.length < 5) return false;

    const uppercase = /[A-Z]/;     
    const lowercase = /[a-z]/;     
    const number = /[0-9]/;        
    const specialChar = /[!#$%.*&]/; 

    if (!uppercase.test(password)) return false;
    if (!lowercase.test(password)) return false;
    if (!number.test(password)) return false;
    if (!specialChar.test(password)) return false;

    // Ensure password is not in the list of previous passwords
    if (passwords.includes(password)) return false;

    return true; // If all conditions are met, the password is valid

}


module.exports = passwordValidator;