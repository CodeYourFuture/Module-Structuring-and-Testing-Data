function passwordValidator(password) {
  // must be at least 5 characters long
  if (password.length < 5) {
    return false;
  }
  // must contain at least one lowercase letter
  const hasLowercase = /[a-z]/.test(password);
  // must contain at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  // must contain at least one digit
  const hasDigit = /[0-9]/.test(password);
  // must contain at least one special character
  const hasSpecialChar = /[!@#$%^&*()\-+]/.test(password);
  // must not contain any spaces
  const hasNoSpaces = !/\s/.test(password);
  // must not be any previous password in the passwords array
  const isNewPassword = !previouspasswords.includes(password);
  return (
    hasLowercase &&
    hasUppercase &&
    hasDigit &&
    hasSpecialChar &&
    hasNoSpaces &&
    isNewPassword
  );
}

module.exports = passwordValidator;
