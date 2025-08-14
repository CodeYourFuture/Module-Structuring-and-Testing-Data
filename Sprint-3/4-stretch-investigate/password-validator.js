function passwordValidator(password, passwords = []) {
  if (password.length < 5) return false;

  if (!/[A-Z]/.test(password)) return false;

  if (!/[a-z]/.test(password)) return false;

  if (!/[0-9]/.test(password)) return false;

  const specialCharacters = ["!", "#", "$", "%", ".", "*", "&"];
  if (!specialCharacters.some(char => password.includes(char))) return false;

  if (passwords.includes(password)) return false;

  return true;
}

module.exports = passwordValidator;
