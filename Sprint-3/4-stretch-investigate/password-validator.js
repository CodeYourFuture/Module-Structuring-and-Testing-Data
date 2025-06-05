function passwordValidator(password, previousPasswords = []) {
  // All regex items combined
  const validationRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%.*&]).{5,}$/;

  // Validate format and check against previous passwords
  return (
    validationRegex.test(password) && !previousPasswords.includes(password)
  );
}

module.exports = passwordValidator;

console.log(passwordValidator('Password12#',['P@ssword12#', 'Password12#']))