// rotateCharacter.test.js
const rotateCharacter = require('./rotate-char.js'); // Import the function

describe('rotateCharacter', () => {
    // Test for lowercase letters
    test('should rotate lowercase letter "a" by 3 positions', () => {
        expect(rotateCharacter('a', 3)).toBe('d');
    });

    test('should rotate lowercase letter "z" by 3 positions (wraparound)', () => {
        expect(rotateCharacter('z', 3)).toBe('c');
    });

    test('should rotate lowercase letter "f" by 1 position', () => {
        expect(rotateCharacter('f', 1)).toBe('g');
    });

    // Test for uppercase letters
    test('should rotate uppercase letter "A" by 3 positions', () => {
        expect(rotateCharacter('A', 3)).toBe('D');
    });

    test('should rotate uppercase letter "Z" by 3 positions (wraparound)', () => {
        expect(rotateCharacter('Z', 3)).toBe('C');
    });

    test('should rotate uppercase letter "Y" by 2 positions (wraparound)', () => {
        expect(rotateCharacter('Y', 2)).toBe('A');
    });

    // Test for non-letter characters
    test('should return "7" unchanged (non-letter character)', () => {
        expect(rotateCharacter('7', 5)).toBe('7');
    });

    test('should return "#" unchanged (non-letter character)', () => {
        expect(rotateCharacter('#', 5)).toBe('#');
    });

    // Test for wraparound of lowercase letters
    test('should wrap lowercase letter "y" by 2 positions', () => {
        expect(rotateCharacter('y', 2)).toBe('a');
    });

    // Test for wraparound of uppercase letters
    test('should wrap uppercase letter "X" by 3 positions', () => {
        expect(rotateCharacter('X', 3)).toBe('A');
    });
});
