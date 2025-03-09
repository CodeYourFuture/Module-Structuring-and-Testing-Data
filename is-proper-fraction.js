function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false)
console.assert(improperFraction === false)

function assertEquals(actualOutput, targetOutput) {
    console.assert(
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
  }

const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true)
console.assert(negativeFraction === true)

function assertEquals(actualOutput, targetOutput) {
    console.assert(
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
  }

const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false)
console.assert(equalFraction === false)

function assertEquals(actualOutput, targetOutput) {
    console.assert(
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
  }
