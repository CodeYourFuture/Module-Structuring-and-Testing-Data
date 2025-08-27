// function passwordValidator(password) {
//   return password.length < 5 ? false : true;
// }

// module.exports = passwordValidator;
const previousPasswords = ["Password123!", "Welcome2023$", "Admin*1"];

function isValidPassword(password) {
  const hasMinLength = password.length >= 5;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[!#$%.*&]/.test(password);
  const isNotPrevious = !previousPasswords.includes(password);

  return (
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSymbol &&
    isNotPrevious
  );
}

module.exports = isValidPassword;
// Example usage:
// console.log(isValidPassword("Abdi10!")); // true
// console.log(isValidPassword("12345")); // false
// console.log(isValidPassword("123")); // false
// console.log(isValidPassword("abcde")); // false
// console.log(isValidPassword("")); // false
