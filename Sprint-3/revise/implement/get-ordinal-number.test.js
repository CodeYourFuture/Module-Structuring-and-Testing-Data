// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback


function getOrdinalNumber(num) {
    const lastDigit = num % 10; // Get the last digit as a number
    const lastTwoDigits = num % 100; // Handle 11th, 12th, 13th exceptions

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${num}th`; // 11th, 12th, 13th
    }

    if (lastDigit === 1) {
        return `${num}st`; // 1st, 21st, etc.
    } else if (lastDigit === 2) {
        return `${num}nd`; // 2nd, 22nd, etc.
    } else if (lastDigit === 3) {
        return `${num}rd`; // 3rd, 23rd, etc.
    } else {
        return `${num}th`; // All other numbers
    }
}





    test('handles numbers ending in 1 correctly', () => {
        expect(getOrdinalNumber(1)).toBe('1st');
        expect(getOrdinalNumber(21)).toBe('21st');
        expect(getOrdinalNumber(101)).toBe('101st');
    });

    test('handles numbers ending in 2 correctly', () => {
        expect(getOrdinalNumber(2)).toBe('2nd');
        expect(getOrdinalNumber(22)).toBe('22nd');
        expect(getOrdinalNumber(102)).toBe('102nd');
    });

    test('handles numbers ending in 3 correctly', () => {
        expect(getOrdinalNumber(3)).toBe('3rd');
        expect(getOrdinalNumber(23)).toBe('23rd');
        expect(getOrdinalNumber(103)).toBe('103rd');
    });

    test('handles numbers ending in other digits correctly', () => {
        expect(getOrdinalNumber(4)).toBe('4th');
        expect(getOrdinalNumber(11)).toBe('11th'); // Special case
        expect(getOrdinalNumber(111)).toBe('111th'); // Special case
        expect(getOrdinalNumber(5)).toBe('5th');
        expect(getOrdinalNumber(6)).toBe('6th');
        expect(getOrdinalNumber(7)).toBe('7th');
        expect(getOrdinalNumber(8)).toBe('8th');
        expect(getOrdinalNumber(9)).toBe('9th');
        expect(getOrdinalNumber(10)).toBe('10th');
    });

    test('handles special cases for 11th, 12th, and 13th', () => {
        expect(getOrdinalNumber(11)).toBe('11th');
        expect(getOrdinalNumber(12)).toBe('12th');
        expect(getOrdinalNumber(13)).toBe('13th');
        expect(getOrdinalNumber(112)).toBe('112th');
        expect(getOrdinalNumber(113)).toBe('113th');
    });


