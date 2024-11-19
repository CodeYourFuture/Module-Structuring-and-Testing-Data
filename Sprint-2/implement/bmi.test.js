const { bmi } = require('./bmi');

describe('BMI Calculator', () => {
    test('calculates BMI correctly for normal weight', () => {
        expect(bmi(1.73, 70)).toBe(23.4);
    });

    test('calculates BMI correctly for example from comments', () => {
        expect(bmi(1.97, 97)).toBe(25.0);
    });

    test('handles zero height', () => {
        expect(bmi(0, 70)).toBe(Error);
    });

    test('calculates BMI for tall person', () => {
        expect(bmi(1.90, 90)).toBe(24.9);
    });

    test('calculates BMI for edge cases', () => {
        expect(bmi(1.50, 45)).toBe(20);
    });
});