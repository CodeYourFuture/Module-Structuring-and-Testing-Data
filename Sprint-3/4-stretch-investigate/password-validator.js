let pastPasswords = ["wWb1!", "12Bv*", "hJ&1"];
function passwordValidator(password) {
  return (
    hasMinLength(password) &&
    hasUpperAndLowercase(password) &&
    hasDigit(password) &&
    hasNonAlphaNumericSymbol(password) &&
    !pastPasswords.includes(password)
  );
}

// function to check for minimum password length
function hasMinLength(password) {
  return password.length < 5 ? false : true;
}
// function to check upper and lower cases
function hasUpperAndLowercase(str) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
}
// function to check for digits
function hasDigit(str) {
  return /\d/.test(str);
}

//function to check for non alphanumeric symbols
// allowed symbols "!", "#", "$", "%", ".", "*", "&"
function hasNonAlphaNumericSymbol(str) {
  return /[!#$%.*&]/.test(str);
}

module.exports = passwordValidator;
