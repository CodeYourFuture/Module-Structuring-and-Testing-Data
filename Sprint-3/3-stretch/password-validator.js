const oldPassword = ["Asasu.12345", "Ha#999"];
function passwordValidator(password) {
  if (password.length < 5) {
    return false;
  }
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return false;
  }
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase) {
    return false;
  }
  const hasaNum = /[0-9]/.test(password);
  if (!hasaNum) {
    return false;
  }
  const hasSpecial = /[!#$%.*&]/.test(password);
  if (!hasSpecial) {
    return false;
  }
  return !oldPassword.includes(password);
}
module.exports = passwordValidator;
