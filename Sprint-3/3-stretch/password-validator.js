// List of previously used passwords
const passwords = ["Abc!1", "Hello#2"];

function passwordValidator(password) {
  // 1. Must have at least 5 characters
  if (password.length < 5) {
    return false;
  }

  // 2. Must have at least one uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // 3. Must have at least one lowercase letter (a-z)
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // 4. Must have at least one number (0-9)
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // 5. Must have at least one symbol from the allowed list
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  // 6. Must not be a previously used password
  if (passwords.includes(password)) {
    return false;
  }

  // ✅ If all rules pass → valid
  return true;
}

module.exports = passwordValidator;
