function passwordValidator(password) {
  const passwords = ["PasswordAccess1!", "PasswordAccess2!", "PasswordAccess3!"];
  if (password.length < 5) {
    return false;
  }
  if (passwords.includes(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (!/[!#$%\.\*&]/.test(password)) {
    return false;
  }

  return true;
}

// console.log(passwordValidator("Password1!"));
// console.log(passwordValidator("P2!4"));
// console.log(passwordValidator("PasswordAccess1!"));

module.exports = passwordValidator;
