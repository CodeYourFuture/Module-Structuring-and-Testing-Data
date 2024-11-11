// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

___________________________________________SOLUTION_____________________________________________________

                                  /* Implementation and Tests
        Here’s the implementation of getOrdinalNumber along with tests written in Jest: */


// getOrdinalNumber.js

// Function to get the ordinal form of a number
function getOrdinalNumber(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  // Special cases for 11, 12, 13
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${number}th`;
  }

  // Determine the suffix based on the last digit
  if (lastDigit === 1) return `${number}st`;
  if (lastDigit === 2) return `${number}nd`;
  if (lastDigit === 3) return `${number}rd`;
  return `${number}th`;
}

module.exports = getOrdinalNumber;


//Testing getOrdinalNumber with Jest

// getOrdinalNumber.test.js

const getOrdinalNumber = require('./getOrdinalNumber');

describe('getOrdinalNumber', () => {
  test('returns "1st" for 1', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
  });

  test('returns "2nd" for 2', () => {
    expect(getOrdinalNumber(2)).toBe('2nd');
  });

  test('returns "3rd" for 3', () => {
    expect(getOrdinalNumber(3)).toBe('3rd');
  });

  test('returns "4th" for 4', () => {
    expect(getOrdinalNumber(4)).toBe('4th');
  });

  test('returns "11th" for 11', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
  });

  test('returns "12th" for 12', () => {
    expect(getOrdinalNumber(12)).toBe('12th');
  });

  test('returns "13th" for 13', () => {
    expect(getOrdinalNumber(13)).toBe('13th');
  });

  test('returns "21st" for 21', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
  });

  test('returns "22nd" for 22', () => {
    expect(getOrdinalNumber(22)).toBe('22nd');
  });

  test('returns "23rd" for 23', () => {
    expect(getOrdinalNumber(23)).toBe('23rd');
  });

  test('returns "100th" for 100', () => {
    expect(getOrdinalNumber(100)).toBe('100th');
  });

  test('returns "111th" for 111', () => {
    expect(getOrdinalNumber(111)).toBe('111th');
  });

  test('returns "113th" for 113', () => {
    expect(getOrdinalNumber(113)).toBe('113th');
  });
});

/*
Explanation of Tests

Basic Ordinals: Tests for 1st, 2nd, 3rd, and 4th verify that the correct suffixes are applied.
Special Cases for 11-13: Tests ensure 11, 12, and 13 always return th, regardless of their last digit.
Edge and Random Numbers: Tests for values like 21st, 22nd, 23rd, and larger numbers like 100 ensure that our function generalizes correctly.
Running Tests
In the terminal, run the tests using Jest:

bash
Copy code
jest getOrdinalNumber.test.js
These tests will verify that getOrdinalNumber is accurate for a variety of cases. Run tests frequently to confirm correctness after every update!

*/