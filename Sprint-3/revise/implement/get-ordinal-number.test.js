// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
  if (typeof num !== 'number') {
    return 'Not a number';
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + 'th';
  }

  switch (lastDigit) {
    case 1:
      return num + 'st';
    case 2:
      return num + 'nd'; 
    case 3:
      return num + 'rd';
    default:
      return num + 'th';
  }
}

describe('getOrdinalNumber', () => {
  test('adds st to numbers ending in 1', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
    expect(getOrdinalNumber(21)).toBe('21st');
    expect(getOrdinalNumber(31)).toBe('31st');
  });

  test('adds nd to numbers ending in 2', () => {
    expect(getOrdinalNumber(2)).toBe('2nd');
    expect(getOrdinalNumber(22)).toBe('22nd');
    expect(getOrdinalNumber(32)).toBe('32nd');
  });

  test('adds rd to numbers ending in 3', () => {
    expect(getOrdinalNumber(3)).toBe('3rd');
    expect(getOrdinalNumber(23)).toBe('23rd');
    expect(getOrdinalNumber(33)).toBe('33rd');
  });

  test('adds th to numbers ending in 0,4,5,6,7,8,9', () => {
    expect(getOrdinalNumber(4)).toBe('4th');
    expect(getOrdinalNumber(5)).toBe('5th');
    expect(getOrdinalNumber(6)).toBe('6th');
    expect(getOrdinalNumber(7)).toBe('7th');
    expect(getOrdinalNumber(8)).toBe('8th');
    expect(getOrdinalNumber(9)).toBe('9th');
    expect(getOrdinalNumber(10)).toBe('10th');
  });

  test('handles special cases 11-13', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
    expect(getOrdinalNumber(12)).toBe('12th');
    expect(getOrdinalNumber(13)).toBe('13th');
  });

  test('handles invalid input', () => {
    expect(getOrdinalNumber('1')).toBe('Not a number');
    expect(getOrdinalNumber(null)).toBe('Not a number');
    expect(getOrdinalNumber(undefined)).toBe('Not a number');
  });
});
