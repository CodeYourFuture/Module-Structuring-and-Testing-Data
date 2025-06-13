function passwordValidator(password, previousPasswords = []) {
  // Has at least 5 characters.
  const hasMinLength = password.length >= 5;
  // Has at least one English uppercase letter (A-Z)
  const hasUppercase = /[A-Z]/.test(password);
  // Has at least one English lowercase letter (a-z)
  const hasLowercase = /[a-z]/.test(password);
  // Has at least one number (0-9)
  const hasNumber = /[0-9]/.test(password);
  // Has at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
  const hasSymbol = /[!#$%.*&]/.test(password);
  // Must not be any previous password in the passwords array
  const isNotUsedBefore = !previousPasswords.includes(password);

  return (
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSymbol &&
    isNotUsedBefore
  );
}

  module.exports = passwordValidator;
