// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
/*
I fixed this code below ,with a better version of it.
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  else if (numerator > denominator) return false; // Improper Fraction check
  else if (numerator < 0 && denominator > numerator)
    return true; // Negative Fraction check
  else if (numerator === denominator) return false; //equalFraction
  //down here are part of the Stretch goals
  else if (numerator === 0) return true; //Proper fraction
  else if (denominator === 0) return false; //Invalid input
  else if (numerator < 0 && denominator < 0 && numerator > denominator)
    return true; //Negative cancellation
}*/

function isProperFraction(numerator, denominator) {
    if (denominator === 0) return false; //Invalid fraction(division by zero)
    if (Math.abs(numerator) < Math.abs(denominator)) return true; //Proper fraction check
    return false; // Otherwise, it's an improper fraction
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

//Test Cases
assertEquals(isProperFraction(2, 3), true); //proper fraction
assertEquals(isProperFraction(5, 2), false);//improper Fraction
assertEquals(isProperFraction(-4, 7), true);// negative Proper Fraction
assertEquals(isProperFraction(3, 3), false);// equal Numerator and Denominator
assertEquals(isProperFraction(0, 3), true);// numerator is 0
assertEquals(isProperFraction(1, 0), false);// denominator is 0
assertEquals(isProperFraction(-2, -4), true);// both Numerator and Denominator are negative
assertEquals(isProperFraction(-5, 3), false);// improper Negative Fraction
assertEquals(isProperFraction(-7, 2), false);// numerator larger but negative