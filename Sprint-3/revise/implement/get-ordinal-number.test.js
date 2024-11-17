// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber=require('./getOrdinalNumber')
describe('getOrdinalNumber', () => {
  test('handles basic cases correctly', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
    expect(getOrdinalNumber(2)).toBe('2nd');
    expect(getOrdinalNumber(3)).toBe('3rd');
    expect(getOrdinalNumber(4)).toBe('4th');
  });

  test('handles teens correctly', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
    expect(getOrdinalNumber(12)).toBe('12th');
    expect(getOrdinalNumber(13)).toBe('13th');
    expect(getOrdinalNumber(14)).toBe('14th');
  });

  test('handles higher numbers correctly', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
    expect(getOrdinalNumber(22)).toBe('22nd');
    expect(getOrdinalNumber(23)).toBe('23rd');
    expect(getOrdinalNumber(100)).toBe('100th');
  });
  test('handles thousand numbers correctly', () => {
    expect(getOrdinalNumber(1000)).toBe('1000th');
    expect(getOrdinalNumber(1001)).toBe('1001st');
    expect(getOrdinalNumber(1011)).toBe('1011th');
    expect(getOrdinalNumber(1021)).toBe('1021st');
  });
  test('handles millons numbers correctly', () => {
    expect(getOrdinalNumber(1000000)).toBe('1000000th');
    expect(getOrdinalNumber(1000001)).toBe('1000001st');
    expect(getOrdinalNumber(1000053)).toBe('1000053rd');
    expect(getOrdinalNumber(1000067)).toBe('1000067th');
  });

  test('handles edge cases', () => {
    expect(getOrdinalNumber(0)).toBe('0th');
    expect(getOrdinalNumber(-1)).toBe('-1st');
    expect(getOrdinalNumber(101)).toBe('101st');
  });

  test('handles non-integer inputs correctly', () => {
    expect(getOrdinalNumber(1.1)).toBe('1st'); // rounds down
    expect(() => getOrdinalNumber('text')).toThrow('Invalid input'); 
    expect(() => getOrdinalNumber(null)).toThrow('Invalid input');
  });
});
