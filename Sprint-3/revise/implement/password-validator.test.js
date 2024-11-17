function passValidation(newPassword, previousPasswords) {
    // Check password length
    if (newPassword.length < 5) {
      return false;
    }
  
    // Check for uppercase, lowercase, digit, and non-alphanumeric symbol
    let hasUpperCase = /[A-Z]/.test(newPassword);
    let hasLowerCase = /[a-z]/.test(newPassword);
    let hasNumber = /[0-9]/.test(newPassword);
    let hasNonAlpha = /[!#$%.*&]/.test(newPassword); // Fixed symbol check
  
    // If any of the conditions are not met, return false
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasNonAlpha) {
      return false;
    }
  
    // Check if password has been used before
    if (previousPasswords.includes(newPassword)) {
      return false;
    }
  
    // If all checks pass, return true
    return true;
  }
  
  // Example usage
  let PASSWORDS = ["Liver12345!", "London12345?", "Sheff12345!?"];
  
  console.log(passValidation("Liver12345.", PASSWORDS)); // Should return false because it's reused
  console.log(passValidation("England54321", PASSWORDS)); // Should return true because it's a valid, new password
  