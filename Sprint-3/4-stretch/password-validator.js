function passwordValidator(password) {
  const previousPasswords = ["Password1!", "Welcome1$", "Admin123!"];

  // Rule 1: Minimum length
  if (password.length < 5) return false;

  // Rule 2: Uppercase
  if (!/[A-Z]/.test(password)) return false;

  // Rule 3: Lowercase
  if (!/[a-z]/.test(password)) return false;

  // Rule 4: Number
  if (!/[0-9]/.test(password)) return false;

  // Rule 5: Special character
  if (!/[!#$%.*&]/.test(password)) return false;

  // Rule 6: Not a previous password
  if (previousPasswords.includes(password)) return false;

  return true;
}

module.exports = passwordValidator;
