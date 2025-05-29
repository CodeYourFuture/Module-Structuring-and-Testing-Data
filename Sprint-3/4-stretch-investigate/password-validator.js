const previousPassword = ["Alds.33", "Hdsd&88"];
function passwordValidator(password) {
  if (password.length < 5) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(password);
  if (!hasUpperCase) {
    return false;
  }
  const hasLowerCase = /[a-z]/.test(password);
  if (!hasLowerCase) {
    return false;
  }
  const hasNumber = /[0-9]/.test(password);

  if (!hasNumber) {
    return false;
  }
  const hasSpecialSymbol = /[!#$%.*&]/.test(password);
  if (!hasSpecialSymbol) {
    return false;
  }
  if (previousPassword.includes(password)) {
    return false;
  }

  return true;
}

module.exports = passwordValidator;
