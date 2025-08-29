function isProperFraction(numerator, denominator) {
  if (denominator == 0){
    return false
  }
  return Math.abs(numerator) < Math.abs(denominator);
  }          

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
module.exports = isProperFraction;


