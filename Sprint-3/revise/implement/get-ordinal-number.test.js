// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + "th";
  }

  switch (lastDigit) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
    default:
      return number + "th";
  }
}

test('handles single-digit numbers', () => {
  expect(getOrdinalNumber(1)).toBe('1st');
  expect(getOrdinalNumber(2)).toBe('2nd');
  expect(getOrdinalNumber(3)).toBe('3rd');
  expect(getOrdinalNumber(4)).toBe('4th');
});

test('handles double-digit numbers', () => {
  expect(getOrdinalNumber(11)).toBe('11th');
  expect(getOrdinalNumber(12)).toBe('12th');
  expect(getOrdinalNumber(13)).toBe('13th');
  expect(getOrdinalNumber(14)).toBe('14th');
  expect(getOrdinalNumber(21)).toBe('21st');
  expect(getOrdinalNumber(32)).toBe('32nd');
  expect(getOrdinalNumber(43)).toBe('43rd');
});

test('handles larger numbers', () => {
  expect(getOrdinalNumber(101)).toBe('101st');
  expect(getOrdinalNumber(111)).toBe('111th');
  expect(getOrdinalNumber(121)).toBe('121st');
  expect(getOrdinalNumber(131)).toBe('131st');
});