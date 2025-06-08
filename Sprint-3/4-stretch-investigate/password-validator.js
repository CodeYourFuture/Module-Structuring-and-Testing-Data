//parameter: string 
//return: a boolean true or false

function isValidPassword(password, previousPasswords = []) {
  // Check against previous passwords
  if (previousPasswords.includes(password)) {
    return false;
  }

  // Check minimum length
  if (password.length < 5) {
    return false;
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check for at least one special character
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  return true;
}



module.exports = isValidPassword;;