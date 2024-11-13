function passwordValidation(password) {
  //   if (existingPasswords.includes(password)) {
  //     return false;
  //   }
  // Check if the password contains at least one uppercase letter
  if (!validatePassword(password)) {
    return false;
  } else return true;
}
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{5,20}$/;
  return regex.test(password);
}
module.exports = passwordValidation;
