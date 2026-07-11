function passwordValidator(
  password,
  usedPasswords = ["pa$$w0rd", "Qwerty1#", "Adm1n2#", "$3cr4t"]
) {
  /* To be valid, a password must:
        - Have at least 5 characters.
        - Have at least one English uppercase letter (A-Z)
        - Have at least one English lowercase letter (a-z)
        - Have at least one number (0-9)
        - Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
        - Must not be any previous password in the passwords array. 
  */
  if (
    password.length < 5 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!#\$%\.\*&]/.test(password) ||
    usedPasswords.includes(password)
  ) {
    return false;
  }
  return true;
}

module.exports = passwordValidator;
