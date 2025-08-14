function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator) < Math.abs(denominator)) return true;
  return false;
}
    
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

module.exports = isProperFraction;