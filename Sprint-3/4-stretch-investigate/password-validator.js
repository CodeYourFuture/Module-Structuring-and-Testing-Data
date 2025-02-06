function passwordValidator(password) {
  let passwordValidation = [/.{8,}/, /[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Za-z0-9]/];
  let isValid = passwordValidation.every((regex) => regex.test(password));

  return isValid;
}
console.log(passwordValidator("Zahra2015@"));
module.exports = passwordValidator;
