function passwordValidator(password) {
  // Check length (at least 5 characters)
  if (password.length < 5) {
    return false;
  }

  // Check for at least one uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter (a-z)
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for at least one number (0-9)
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check for at least one special symbol: !, #, $, .
  if (!/[!#$.]/.test(password)) {
    return false;
  }

  // If all checks pass, return true
  return true;
}

module.exports = passwordValidator;