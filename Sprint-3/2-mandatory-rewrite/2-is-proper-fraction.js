function isProperFraction(numerator, denominator) {
  // if (
  //   numerator < denominator &&
  //   Number.isInteger(numerator) &&
  //   Number.isInteger(denominator)
  // )
  //   return true;
  // else return false;
  //refactored code (I am using Number.Integer method to make sure that decimal integers return as false)
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  return (
    numerator < denominator &&
    Number.isInteger(numerator) &&
    Number.isInteger(denominator)
  );
}

module.exports = isProperFraction;
