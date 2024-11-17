const getOrdinalNumber = require('./getOrdinalNumber'); // Adjust path as needed

describe('getOrdinalNumber', () => {

  // Basic cases
  test('should return "1st" for 1', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
  });

  test('should return "2nd" for 2', () => {
    expect(getOrdinalNumber(2)).toBe('2nd');
  });

  test('should return "3rd" for 3', () => {
    expect(getOrdinalNumber(3)).toBe('3rd');
  });

  test('should return "4th" for 4', () => {
    expect(getOrdinalNumber(4)).toBe('4th');
  });

  // Testing teens (special case for 11th, 12th, 13th)
  test('should return "11th" for 11', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
  });

  test('should return "12th" for 12', () => {
    expect(getOrdinalNumber(12)).toBe('12th');
  });

  test('should return "13th" for 13', () => {
    expect(getOrdinalNumber(13)).toBe('13th');
  });

  // Testing numbers ending in 1, 2, or 3
  test('should return "21st" for 21', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
  });

  test('should return "22nd" for 22', () => {
    expect(getOrdinalNumber(22)).toBe('22nd');
  });

  test('should return "23rd" for 23', () => {
    expect(getOrdinalNumber(23)).toBe('23rd');
  });

  // Testing other cases (numbers that do not end in 1, 2, or 3)
  test('should return "24th" for 24', () => {
    expect(getOrdinalNumber(24)).toBe('24th');
  });

  test('should return "101st" for 101', () => {
    expect(getOrdinalNumber(101)).toBe('101st');
  });

  test('should return "102nd" for 102', () => {
    expect(getOrdinalNumber(102)).toBe('102nd');
  });

  test('should return "103rd" for 103', () => {
    expect(getOrdinalNumber(103)).toBe('103rd');
  });

  test('should return "104th" for 104', () => {
    expect(getOrdinalNumber(104)).toBe('104th');
  });

  // Large numbers
  test('should return "1001st" for 1001', () => {
    expect(getOrdinalNumber(1001)).toBe('1001st');
  });

  test('should return "112th" for 112', () => {
    expect(getOrdinalNumber(112)).toBe('112th');
  });

  test('should return "111st" for 111', () => {
    expect(getOrdinalNumber(111)).toBe('111st');
  });

});


  