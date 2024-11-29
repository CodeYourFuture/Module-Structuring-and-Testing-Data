// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./get-ordinal-number');

test('1 should return 1st', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
});

test('2 should return 2nd', () => {
    expect(getOrdinalNumber(2)).toBe('2nd');
});

test('3 should return 3rd', () => {
    expect(getOrdinalNumber(3)).toBe('3rd');
});

test('4 should return 4th', () => {
    expect(getOrdinalNumber(4)).toBe('4th');
});

test('11 should return 11th', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
});

test('21 should return 21st', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
});

test('0 should return 0', () => {
    expect(getOrdinalNumber(0)).toBe('0');
});