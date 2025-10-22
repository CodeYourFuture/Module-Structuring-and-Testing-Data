// Array of previous passwords (example)
const previousPasswords = ["Password1!", "Hello123#", "Test*2024"];

// Function to check if a password is valid
function isValidPassword(password) {
  // Rule 1: At least 5 characters
  if (password.length < 5) return false;

  // Rule 2: At least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Rule 3: At least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Rule 4: At least one number
  if (!/[0-9]/.test(password)) return false;

  // Rule 5: At least one non-alphanumeric symbol
  if (!/[!#$%.*&]/.test(password)) return false;

  // Rule 6: Must not be in previous passwords array
  if (previousPasswords.includes(password)) return false;

  // All checks passed
  return true;
}

// Export function for Jest testing
module.exports = isValidPassword;
