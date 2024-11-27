//just copied the test cases from the spec
const rotateCharacter = require('./rotateCharacter');

describe('rotateCharacter', () => {
    // Lowercase
    test('rotates lowercase letters', () => {
        expect(rotateCharacter("a", 3)).toBe("d");
        expect(rotateCharacter("f", 1)).toBe("g");
    });

    // Uppercase
    test('rotates uppercase letters', () => {
        expect(rotateCharacter("A", 3)).toBe("D");
        expect(rotateCharacter("F", 1)).toBe("G");
    });

    // Wraparound alphabet. this is a issue.
    test('handles wraparound for lowercase', () => {
        expect(rotateCharacter("z", 1)).toBe("a");
        expect(rotateCharacter("x", 5)).toBe("c");
    });

    test('handles wraparound for uppercase', () => {
        expect(rotateCharacter("Z", 1)).toBe("A");
        expect(rotateCharacter("Y", 2)).toBe("A");
    });

    // Non-letter
    test('leaves non-letter characters unchanged', () => {
        expect(rotateCharacter("7", 5)).toBe("7");
        expect(rotateCharacter("!", 3)).toBe("!");
    });

    // Negative shifts. another area that needs attention.
    test('handles negative shifts', () => {
        expect(rotateCharacter("d", -1)).toBe("c");
        expect(rotateCharacter("A", -1)).toBe("Z");
    });
}); 