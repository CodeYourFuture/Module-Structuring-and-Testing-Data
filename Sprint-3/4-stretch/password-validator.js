function passwordValidator(password) {
  const previousPasswords = ["heLlo5.", "Su1ma#"];

  const checks = {
    minLength: password.length > 4,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[!#$%.*&]/.test(password),
    notPreviousPassword: !previousPasswords.includes(password),
  };

  return Object.values(checks).every(Boolean);
}

module.exports = passwordValidator;
