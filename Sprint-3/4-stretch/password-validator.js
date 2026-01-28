const previousPasswords = ["5B43n21"];
function passwordValidator(password) {
  if (password.length < 5) return false;
  if (previousPasswords.includes(password)) return false;
  previousPasswords.push(password);

  const rules = [/[A-Z]/, /[a-z]/, /[0-9]/, /[!#$%.*&]/];

  return rules.every((rule) => rule.test(password));
}

module.exports = passwordValidator;
