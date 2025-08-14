function passwordValidator(password, previousPasswords = [""]) {
    //return password.length < 5 ? false : true
    if (typeof password !== 'string') return false;

  // Rule 1: Minimum length (8)
  if (password.length < 8) return false;

  // Rule 2: Maximum length (20)
  if (password.length > 20) return false;

  // Rule 3: Contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Rule 4: Contains at least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Rule 5: Contains at least one digit
  if (!/\d/.test(password)) return false;

  // Rule 6: Contains at least one special character
  if (!/[^A-Za-z0-9]/.test(password)) return false;

  // Rule 7: No whitespace allowed
  if (/\s/.test(password)) return false;

  // Rule 8: At least 4 unique characters
  if (new Set(password).size < 4) return false;

  // Rule 9: Must not be any previous password in the array
  if (previousPasswords.includes(password)) return false;

  // If all checks pass, the password is valid
  return true;
}

const oldPasswords = ['OldPass123!', 'Another$Pass9', 'Password1!'];

console.log(passwordValidator("Abc123!@#")); // true
console.log(passwordValidator("abc123"));    // false
console.log(passwordValidator("AAAAAAA1!")); // false (less unique chars)
console.log(passwordValidator("OldPass123!", oldPasswords));
 // false (sequential digits)

module.exports = passwordValidator;