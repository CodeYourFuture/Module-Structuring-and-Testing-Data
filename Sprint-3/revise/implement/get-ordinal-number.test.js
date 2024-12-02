// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// This function takes a number and returns its ordinal representation (e.g., 1 -> 1st, 2 -> 2nd)
const getOrdinalNumber = require('./get-ordinal-number.js');

describe('getOrdinalNumber', () => {

    test('should return the correct ordinal number for numbers ending in 1, 2, or 3', () => {
        expect(getOrdinalNumber(1)).toBe('1st');
        expect(getOrdinalNumber(21)).toBe('21st');
        expect(getOrdinalNumber(101)).toBe('101st');

        expect(getOrdinalNumber(2)).toBe('2nd');
        expect(getOrdinalNumber(22)).toBe('22nd');
        expect(getOrdinalNumber(102)).toBe('102nd');

        expect(getOrdinalNumber(3)).toBe('3rd');
        expect(getOrdinalNumber(23)).toBe('23rd');
        expect(getOrdinalNumber(103)).toBe('103rd');
    });

    test('should return "th" for numbers ending in 4-9 and 0', () => {
        expect(getOrdinalNumber(4)).toBe('4th');
        expect(getOrdinalNumber(14)).toBe('14th');
        expect(getOrdinalNumber(24)).toBe('24th');
        expect(getOrdinalNumber(100)).toBe('100th');
        expect(getOrdinalNumber(999)).toBe('999th');
    });

    test('should return "th" for special cases like 11, 12, 13', () => {
        expect(getOrdinalNumber(11)).toBe('11th');
        expect(getOrdinalNumber(12)).toBe('12th');
        expect(getOrdinalNumber(13)).toBe('13th');
        expect(getOrdinalNumber(111)).toBe('111th');
        expect(getOrdinalNumber(112)).toBe('112th');
        expect(getOrdinalNumber(113)).toBe('113th');
    });

    test('should work for large numbers', () => {
        expect(getOrdinalNumber(1001)).toBe('1001st');
        expect(getOrdinalNumber(2002)).toBe('2002nd');
        expect(getOrdinalNumber(3003)).toBe('3003rd');
        expect(getOrdinalNumber(4004)).toBe('4004th');
    });

    test('should return the same number for negative inputs', () => {
        expect(getOrdinalNumber(-1)).toBe('-1st');
        expect(getOrdinalNumber(-21)).toBe('-21st');
        expect(getOrdinalNumber(-101)).toBe('-101st');
    });
});
