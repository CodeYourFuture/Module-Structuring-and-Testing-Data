function isValidPassword(password) {
  const previousPasswords = ["abcD1*", "Fatma123.", "App23$"];
  if (
    password.length >= 5 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!#$%.*&]/.test(password) &&
    !previousPasswords.includes(password)
  ) {
    return true;
  }
  return false;
}

module.exports = isValidPassword;
