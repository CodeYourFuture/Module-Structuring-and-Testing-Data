function passwordValidator(password) {
  const oldPasswordScheck = ![
    "Passsword_234",
    "Sunshine43",
    "Fighter24$",
  ].includes(password);
  const numberscheck = /\d/.test(password);
  const alphabetUppercheck = /[A-Z]/.test(password);
  const alphabetLowercheck = /[a-z]/.test(password);
  const symbolscheck = /[!#$%.*&]/.test(password);
  if (
    password.length >= 5 &&
    numberscheck &&
    alphabetUppercheck &&
    alphabetLowercheck &&
    symbolscheck &&
    oldPasswordScheck
  ) {
    console.log(`Password is valid!`);
    return true;
  } else {
    console.log(`Password is not valid!`);
    return false;
  }
}

module.exports = passwordValidator;
