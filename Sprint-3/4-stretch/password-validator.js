function passwordValidator(password,oldPasswords=[]) {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!#$%.*&]/.test(password) &&
    password.length >= 5 &&
    !oldPasswords.includes(password)
  )
    return true;
    

  return false;
}

module.exports = passwordValidator;
