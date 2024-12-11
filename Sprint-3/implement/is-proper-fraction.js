// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    const err = new Error("Denominator cannot be zero");
    return err;
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

// Created a testData array of objects with acceptance criteria
const testData = [
  {
    Name: "Proper Fraction check",
    Input: { numerator: 2, denominator: 3 },
    TargetOutput: true,
    Explanation:
      "The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.",
  },

  {
    Name: "Improper Fraction check",
    Input: { numerator: 5, denominator: 2 },
    TargetOutput: false,
    Explanation:
      "The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.",
  },

  {
    Name: "Zero Denominator check",
    Input: {
      numerator: 3,
      denominator: 0,
    },
    TargetOutput: new Error("Denominator cannot be zero"),
    Explanation:
      "The function should throw an error when the denominator is zero, as it's not a valid fraction.",
  },

  {
    Name: "Negative Fraction check",
    Input: { numerator: -4, denominator: 7 },
    TargetOutput: true,
    Explanation:
      "The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.",
  },
  {
    Name: "Equal Numerator and Denominator check",
    Input: { numerator: 3, denominator: 3 },
    TargetOutput: false,
    Explanation:
      "The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false. These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions",
  },

  // Additional tests added
  {
    Name: "Negative Fraction check",
    Input: { numerator: 3, denominator: -5 },
    TargetOutput: true,
    Explanation:
      "The fraction 3/-5 is a proper fraction because the numerator (3) is less than the absolute value of the denominator (5). The function should return true.",
  },
  {
    Name: "Negative Improper Fraction check",
    Input: { numerator: -13, denominator: 5 },
    TargetOutput: false,
    Explanation:
      "The fraction -13/5 is an improper fraction, where the absolute value of the numerator (13) is greater than or equal to the denominator. The function should return false.",
  },

  {
    Name: "Negative Improper Fraction check",
    Input: { numerator: 9, denominator: -6 },
    TargetOutput: false,
    Explanation:
      "The fraction 9/-7 is an improper fraction, where the numerator (9) is greater than or equal to the absolute value of the denominator (6). The function should return false.",
  },
];

// Used the map array method to iterate through the test data.
testData.map((data) => {
  const { Name, Input, TargetOutput, Explanation } = data;
  const { numerator, denominator } = Input;
  console.assert(
    isProperFraction(numerator, denominator) === TargetOutput,
    `${Name} \nCurrent output: ${isProperFraction(
      numerator,
      denominator
    )} \nTarget output: ${TargetOutput} \n${Explanation} \n##################################################`
  );
});
