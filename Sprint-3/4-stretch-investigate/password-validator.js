function passwordValidator(password, previousPasswords = []) {
  switch (true) {
    case password.length < 5:
      return false;
      break;
    case !/[A-Z]/.test(password):
      return false;
      break;
    case !/[a-z]/.test(password):
      return false;
      break;
    case !/[0-9]/.test(password):
      return false;
      break;
    case !/[!#$%.&*]/.test(password):
      return false;
      break;
    // Check if the password is in the previous passwords array
    case previousPasswords.includes(password):
      return false;
      break;
    // If all conditions are met, return true
    default:
      return true;
      break;
  }
}

module.exports = passwordValidator;
