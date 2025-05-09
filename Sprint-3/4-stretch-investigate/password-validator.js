const previousPasswords = ["Password123!", "HelloWorld1#", "Test@123"]; // Example stored passwords

function passwordValidator(password) {
  // Check length
  if (password.length < 5) return false;

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Check for at least one number
  if (!/[0-9]/.test(password)) return false;

  // Check for at least one special character from the given list
  if (!/[!#$%.*&]/.test(password)) return false;

  // Check if the password was used before
  if (previousPasswords.includes(password)) return false;

  return true;
}

module.exports = passwordValidator;
