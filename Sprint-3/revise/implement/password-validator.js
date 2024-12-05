
function isPasswordValid(password, passwords) {
  // Define the symbols allowed in the password
  const symbols = /[!#$%.*&]/;

  // Check if the password meets all the conditions
  const hasMinimumLength = password.length >= 5;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = symbols.test(password);
  const isUnique = !passwords.includes(password);

  // Return true if all conditions are satisfied
  return (
    hasMinimumLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSymbol &&
    isUnique
  );
}

// Example usage
const passwords = ["Passw0rd!", "Admin123$", "Hello*World1"];
console.log(isPasswordValid("New*Pass1", passwords)); // true
console.log(isPasswordValid("short1*", passwords));   // false (too short)
console.log(isPasswordValid("NoNumber!", passwords)); // false (missing number)
console.log(isPasswordValid("Admin123$", passwords)); // false (not unique)

module.exports = isPasswordValid;