function passwordValidation(password) {
  //   if (existingPasswords.includes(password)) {
  //     return false;
  //   }
  if (password.length > 5) {
    // Check if the password contains at least one uppercase letter
    if (!validatePassword(password)) {
      return false;
    } else return true;
  } else return false;
}
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
  return regex.test(password);
}
module.exports = passwordValidation;
