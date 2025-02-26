function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
}


function assertEquals(actualOutput, targetOutput) {
    console.assert(
      actualOutput === targetOutput,
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
  }
module.exports = isProperFraction;