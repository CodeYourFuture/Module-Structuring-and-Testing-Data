const previousPasswords = ["Pass123!", "Hello123$", "Secure1*"];

function passwordValidator(password) {
  if (password.length < 5) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  if (!hasUpperCase) return false;

  const hasLowerCase = /[a-z]/.test(password);
  if (!hasLowerCase) return false;

  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) return false;

  const hasSpecialChar = /[!#$%.*&]/.test(password);
  if (!hasSpecialChar) return false;

  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}

module.exports = passwordValidator;
