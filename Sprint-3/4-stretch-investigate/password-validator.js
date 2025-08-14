function passwordValidator(password) {
    return password.length < 5 ? false : true
}

function passwordValidator(password) {
  // Check if password is a string and has at least 5 characters
  if (typeof password !== "string") return false;
  if (password.length < 5) return false;

  // Add more checks if needed (e.g., at least one number, one uppercase, etc.)
  // For now, we only check minimum length
  return true;
}

module.exports = passwordValidator;
