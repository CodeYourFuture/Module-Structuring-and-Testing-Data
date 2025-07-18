function isProperFraction(numerator, denominator) {
  if (
    typeof numerator !== "number" ||
    typeof denominator !== "number" ||
    denominator === 0
  ) {
    return false; // invalid input
  }

  const value = numerator / denominator;
  return value > 0 && value < 1;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

module.exports = isProperFraction;
