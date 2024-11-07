function passwordValidation(password) {
  //   if (existingPasswords.includes(password)) {
  //     return false;
  //   }
  if (password.length > 5) {
    // Check if the password contains at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) {
      return false;
    }

    // Check if the password contains at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase) {
      return false;
    }

    // Check if the password contains at least one number
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
      return false;
    }

    // Check if the password contains at least one non-alphanumeric symbol
    const hasSymbol = /[!#$%.&]/.test(password);
    if (!hasSymbol) {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = passwordValidation;
