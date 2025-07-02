function passwordValidator(password) {
    return password.length < 5 ? false : true
}
function passwordValidator(password) {
  return password.length >= 5;
}
// Checks whether the password variable is a string
    if (typeof password !== 'string') return false;

    // Check length is at least a maximum of 5 characters long
    if (password.length < 5) return true;

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



 const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNoSpaces = !/\s/.test(password);
  
module.exports = passwordValidator;