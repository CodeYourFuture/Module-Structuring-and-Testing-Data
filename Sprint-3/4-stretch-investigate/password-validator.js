function passwordValidator(password,previousPasswords) {
      // Check if the password is at least 5 characters long
  if (password.length < 5) {
    return false; // Invalid if password is too short
  }

  // Check if password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false; // Invalid if no uppercase letter
  }

  // Check if password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false; // Invalid if no lowercase letter
  }

  // Check if password contains at least one number
  if (!/[0-9]/.test(password)) {
    return false; // Invalid if no number
  }

  // Check if password contains at least one special character
  if (!/[!#$%.&*]/.test(password)) {
    return false; // Invalid if no special character
  }

  // Check if password is not in the previous passwords list
  if (previousPasswords.includes(password)) {
    return false; // Invalid if password is already used
  }

  // If all conditions are met, the password is valid
  return true;
}

module.exports = passwordValidator;