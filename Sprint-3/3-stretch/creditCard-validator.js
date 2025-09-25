function creditCardValidator(cardNumber) {
  // Remove all - and spaces from the input
  const sanitized = cardNumber.replace(/[-\s]/g, "");

  //check if the length of the sanitized input is 16
  if (sanitized.length !== 16) {
    return false;
  } else {
    return true;
  }
}

module.exports = creditCardValidator;
