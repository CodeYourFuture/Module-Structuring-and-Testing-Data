const rotateCharacter = require('./rotate-char.js');

describe('rotateCharacter', () => {
    test('should rotate lowercase letters correctly', () => {
        expect(rotateCharacter('a', 3)).toBe('d');
        expect(rotateCharacter('f', 1)).toBe('g');
        expect(rotateCharacter('z', 1)).toBe('a'); 
    });

    test('should rotate uppercase letters correctly', () => {
        expect(rotateCharacter('A', 3)).toBe('D');
        expect(rotateCharacter('F', 1)).toBe('G');
        expect(rotateCharacter('Z', 2)).toBe('B'); 
    });

    test('should leave non-letter characters unchanged', () => {
        expect(rotateCharacter('7', 5)).toBe('7');
        expect(rotateCharacter('#', 3)).toBe('#');
        expect(rotateCharacter(' ', 10)).toBe(' ');
    });

    test('should handle wraparound for lowercase letters', () => {
        expect(rotateCharacter('z', 1)).toBe('a');
        expect(rotateCharacter('x', 5)).toBe('c');
    });

    test('should handle wraparound for uppercase letters', () => {
        expect(rotateCharacter('Z', 1)).toBe('A');
        expect(rotateCharacter('Y', 2)).toBe('A');
    });

    test('should handle a shift of zero', () => {
        expect(rotateCharacter('a', 0)).toBe('a');
        expect(rotateCharacter('A', 0)).toBe('A');
        expect(rotateCharacter('7', 0)).toBe('7');
    });

    test('should handle large shifts that exceed 26', () => {
        expect(rotateCharacter('a', 29)).toBe('d'); 
        expect(rotateCharacter('Z', 28)).toBe('B'); 
    });
});
