// A list of previously used passwords that cannot be reused.
const previousPasswords = ["Password1!", "Welcome2#", "Strong3$"];

function passwordValidator(password) {
  // Ensure a password value is provided and that it is a string.
  if (typeof password !== "string") {
    return false;
  }

  // Password must be at least 5 characters long.
  if (password.length < 5) {
    return false;
  }

  // Password must contain at least one uppercase letter.
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password must contain at least one lowercase letter.
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password must contain at least one number.
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Password must contain at least one allowed symbol.
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  // Password must not match any previous password.
  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}

module.exports = passwordValidator;
