let pastPasswords = ["wWb1!", "12Bv*", "hJ&1"];
function passwordValidator(password) {
  return (
    passwordMinLength(password) &&
    hasUpperLowercase(password) &&
    hasDigit(password) &&
    nonAlphaNumericSymbol(password) &&
    !pastPasswords.includes(password)
  );
}

// function to check for minimum password length
function passwordMinLength(password) {
  return password.length < 5 ? false : true;
}
// function to check upper and lower cases
function hasUpperLowercase(str) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
}
// function to check for digits
function hasDigit(str) {
  return /\d/.test(str);
}

//function to check for non alphanumeric symbols
// allowed symbols "!", "#", "$", "%", ".", "*", "&"
function nonAlphaNumericSymbol(str) {
  return /[!#$%.*&]/.test(str);
}

module.exports = passwordValidator;
