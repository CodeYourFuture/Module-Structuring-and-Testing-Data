const previousPasswords = ["Password123!", "Welcome1$", "Admin#2023"]; // example previous passwords list

function passwordValidator(password) {
  
  // Check that password is a string
  if (typeof password !== "string") return false;
  // Check minimum length
  if (password.length < 5) return false;

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Check for at least one digit
  if (!/[0-9]/.test(password)) return false;

  // Check for at least one special character from allowed set
  if (!/[!#$%.*&]/.test(password)) return false;

  // Check password not previously used
  if (previousPasswords.includes(password)) return false;

  // If all checks pass, password is valid
  return true;
}

module.exports = passwordValidator;
