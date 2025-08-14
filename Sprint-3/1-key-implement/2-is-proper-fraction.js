// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically


// if I pass 4 , -7 to isProperFraction

function isProperFraction(numerator, denominator) {
    //this is the proper fraction check

    if (Math.abs(numerator) < denominator )return true;

    // In this line we check if the denominator is greater than numerator in value but it is negative, we return true
    else if(numerator< Math.abs(denominator) && denominator<0 ) return true;
    
    //this is the improper fraction check, this is for positive numerator and denominator, if the numerator is greater than or equal to the denominator, we return false
    else if (numerator >= denominator  ) return false;
    
    
    //this is the negative fraction check, in this line we check the value of numerator, if it is negative, we take the absolute value of the numerator and compare it with the denominator
    else if(numerator < 0 && Math.abs(numerator) < denominator) return true;
    
    else if( denominator===0) return false;
    
}


// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);
// ====> complete with your assertion

const negativeFraction2 = isProperFraction(4, -7);
assertEquals(negativeFraction2, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);
// ====> complete with your assertion


//Special Cases where denominator is 0 
const errorFraction = isProperFraction(4, 0);
assertEquals(errorFraction, false);

//Special case where denominator is 0 and numerator is negative number, tailing this test resulted in updating the first condition of isProperFraction in line 16
const errorFunciton2 = isProperFraction(-5 , 0);
assertEquals(errorFunciton2, false);
// Stretch:
// What other scenarios could you test for?

// The scenario that we have negative denominator and positive numerator, which the result of the division is less than 1 anf greater than -1, it should return true because it is proper fraction

module.exports = isProperFraction;