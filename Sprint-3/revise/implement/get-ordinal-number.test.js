
//Answer:

const getOrdinalNumber = require('./get-ordinal-number');

test('returns correct ordinal for single-digit numbers', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
    expect(getOrdinalNumber(2)).toBe('2nd');
    expect(getOrdinalNumber(3)).toBe('3rd');
    expect(getOrdinalNumber(4)).toBe('4th');
});

test('handles special cases like 11, 12, and 13', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
    expect(getOrdinalNumber(12)).toBe('12th');
    expect(getOrdinalNumber(13)).toBe('13th');
});

test('handles numbers greater than 20 correctly', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
    expect(getOrdinalNumber(22)).toBe('22nd');
    expect(getOrdinalNumber(23)).toBe('23rd');
    expect(getOrdinalNumber(24)).toBe('24th');
});
