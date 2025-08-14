// Has at least 5 characters.
function hasMinLength(password) {
  return password.length >= 5;
}

// Has at least one English uppercase letter (A-Z)
function hasUppercase(password) {
  return /[A-Z]/.test(password);
}

// Has at least one English lowercase letter (a-z)
function hasLowercase(password) {
  return /[a-z]/.test(password);
}

// Has at least one number (0-9)
function hasNumber(password) {
  return /[0-9]/.test(password);
}

// Has at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
function hasSymbol(password) {
  return /[!#$%.*&]/.test(password);
}

// Must not be any previous password in the passwords array
function isNotUsedBefore(password, previousPasswords = []) {
  return !previousPasswords.includes(password);
}

function passwordValidator(password, previousPasswords = []) {
  return (
    hasMinLength(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasNumber(password) &&
    hasSymbol(password) &&
    isNotUsedBefore(password, previousPasswords)
  );
}

module.exports = passwordValidator;
