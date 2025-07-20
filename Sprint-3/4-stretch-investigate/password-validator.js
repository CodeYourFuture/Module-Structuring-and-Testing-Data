// To be valid, a password must:

// - Have at least one English uppercase letter (A-Z)
// - Have at least one English lowercase letter (a-z)
// - Have at least one number (0-9)

// - Must not be any previous password in the passwords array.

const usedPasswords = [
  "B3a*fz9L",
  "g7!Rk2Wq",
  "Z#1dLp8v",
  "M9.tAq3b",
  "eV$7xGn2",
];

// function passwordValidator(password) {
//   let arr = password.split("");
//   // - Have at least 5 characters.
//   if (arr.length < 5) return false;
//   // - Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
//   const symbols = new Array("!", "#", "$", "%", ".", "*", "&");

//   const hasSymbol = arr.some((char) => symbols.includes(char));
//   const hasDigit = arr.some((char) => /[0-9]/.test(char));
//   const hasLower = arr.some((char) => /[a-z]/.test(char));
//   const hasUpper = arr.some((char) => /[A-Z]/.test(char));

//   const usedPass = !usedPasswords.includes(password);
//   return hasSymbol && hasDigit && hasLower && hasUpper && usedPass;
// }

//Prettier makes this looks odd.

// function passwordValidator(password) {
//   const arr = password.split("");
//   const symbols = ["!", "#", "$", "%", ".", "*", "&"];

//   return password.length < 5
//     ? false
//     : !arr.some((char) => symbols.includes(char))
//     ? false
//     : !arr.some((char) => /[0-9]/.test(char))
//     ? false
//     : !arr.some((char) => /[a-z]/.test(char))
//     ? false
//     : !arr.some((char) => /[A-Z]/.test(char))
//     ? false
//     : usedPasswords.includes(password)
//     ? false
//     : true;
// }

//

//return ASAP if condition match

function passwordValidator(password) {
  const arr = password.split("");
  const symbols = ["!", "#", "$", "%", ".", "*", "&"];

  if (usedPasswords.includes(password)) return false;
  if (password.length < 5) return false;
  if (!arr.some((char) => symbols.includes(char))) return false;

  if (!arr.some((char) => /[0-9]/.test(char))) return false;
  if (!arr.some((char) => /[a-z]/.test(char))) return false;
  if (!arr.some((char) => /[A-Z]/.test(char))) return false;

  return true;
}

module.exports = passwordValidator;
