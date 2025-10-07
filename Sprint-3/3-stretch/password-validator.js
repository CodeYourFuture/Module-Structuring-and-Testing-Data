function passwordValidator(password) {
  const lengthCondition = password.length >= 5;
  console.log(`length condition: ${lengthCondition}`);

  const uppercaseCondition = /[A-Z]/.test(password);
  console.log(`upper case condition: ${uppercaseCondition}`);

  const lowercaseCondition = /[a-z]/.test(password);
  console.log(`lower case condition: ${lowercaseCondition}`);

  const numberCondition = /[0-9]/.test(password);
  console.log(`number condition: ${numberCondition}`);

  const symbolCondition = /[!#$%.*&]/.test(password);
  console.log(`symbol condition: ${symbolCondition}`);

  const previousPasswords = [
    "123Ab!",
    "abcD1#",
    "Password1!",
    "Qwerty1*",
    "Zxcvbnm2$",
  ];
  const notInPreviousPasswords = !previousPasswords.includes(password);
  console.log(`previous password condition: ${notInPreviousPasswords}`);

  return (
    lengthCondition &&
    uppercaseCondition &&
    lowercaseCondition &&
    numberCondition &&
    symbolCondition &&
    notInPreviousPasswords
  );
}

module.exports = passwordValidator;
