function passwordValidator(password,previousPasswords) {

  if (password.length < 5) return false;

  // Rule 2: At least one uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) return false;

  // Rule 3: At least one lowercase letter (a-z)
  if (!/[a-z]/.test(password)) return false;

  // Rule 4: At least one digit (0-9)
  if (!/[0-9]/.test(password)) return false;

  // Rule 5: At least one special character (! # $ % . * &)
  if (!/[!#$%.*&]/.test(password)) return false;

  // Rule 6: Must not be in previousPasswords array
  if (previousPasswords.includes(password)) return false;

  // If all checks pass
  return true;
}
    


module.exports = passwordValidator;
