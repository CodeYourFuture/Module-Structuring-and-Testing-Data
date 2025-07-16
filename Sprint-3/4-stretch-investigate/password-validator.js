function isValidPassword(password, previousPasswords = []) {
  return (
    password.length >= 5 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!#$%.*&]/.test(password) &&
    !previousPasswords.includes(password)
  );
}

module.exports = isValidPassword;
