// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return Math.abs(numerator) < denominator;
}

module.exports = isProperFraction;
