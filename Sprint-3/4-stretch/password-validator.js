function passwordValidator(password) {
  if (password.match(/[A-Z]/) && password.match(/[a-z]/) &&
  password.match(/[0-9]/) &&  password.match(/[!#$%.*&]/) && 
  password.length >= 5) return true;
 
  return false;
}

module.exports = passwordValidator;
