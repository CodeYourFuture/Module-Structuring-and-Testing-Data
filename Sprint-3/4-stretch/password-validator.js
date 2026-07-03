function passwordValidator(password) {
  if (password.length < 5) {
    return false;
  }
  return true;
}

module.exports = passwordValidator;
