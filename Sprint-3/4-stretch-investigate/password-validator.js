function passwordValidator(password, previousPasswords) {
  if (!Array.isArray(previousPasswords)) {
    previousPasswords = [];
    // if previousPasswords is not an array, it will be converted to an empty array. (meaning there are no previous passwords)
  }

  // implemented regex to check if password has at least one uppercase letter, one lowercase letter, one number, one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&") and at least 5 characters.
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%.*&]).{5,}$/;

  // check if password  does not matches the regex pattern.
  // .test () method checks if the password matches the regex pattern.
  if (!regex.test(password)) {
    return false;
  }

  // check if password is in the previousPasswords array.
  // .includes() method checks if the password is in the array.
  if (previousPasswords.includes(password)) {
    return false;
  }

  return true; // if the password is valid, return true.
}

module.exports = passwordValidator;
