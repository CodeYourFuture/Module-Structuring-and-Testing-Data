
function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(0, 5), true);

assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(-1, -2), true);

assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(-5, -5), false);

assertEquals(isProperFraction(7, 4), false);
assertEquals(isProperFraction(10, 3), false);

assertEquals(isProperFraction(-5, 2), false);
assertEquals(isProperFraction(5, -2), false);
assertEquals(isProperFraction(-5, -2), false);




console.log("All tests finished");
