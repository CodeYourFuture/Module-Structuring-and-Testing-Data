const previousPasswords = ["Pass123!", "HelloWorld1$", "Admin2024#"];

function passwordValidator(password) {
  if (password.length < 5) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!#$%.*&]/.test(password)) return false;
  if (previousPasswords.includes(password)) return false;
  return true;
}

module.exports = passwordValidator;
