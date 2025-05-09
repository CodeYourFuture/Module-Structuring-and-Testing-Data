const passwords = [`Qwerty12345$`, "Zxc322!", `Ggwp228*`];
function passwordValidator(password) {
  // prettier-ignore
  if (passwords.includes(password))
    return false
  else if(password.length >= 5 && /[A-Z]/.test(password) && /[a-z]/.test(password)&& /[0-9]/.test(password) && /[!#$%.*&]/.test(password)) return true
  else return false
}

module.exports = passwordValidator;

// Password Validation

// Write a program that should check if a password is valid
// and returns a boolean

// To be valid, a password must:
// - Have at least 5 characters.
// - Have at least one English uppercase letter (A-Z)
// - Have at least one English lowercase letter (a-z)
// - Have at least one number (0-9)
// - Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
// - Must not be any previous password in the passwords array.

// You must breakdown this problem in order to solve it. Find one test case first and get that working
