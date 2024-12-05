const rotateCharacter = require('../rotate-char');

test('rotateCharacter function', () => {
    expect(rotateCharacter("a", 3)).toBe("d");
    expect(rotateCharacter("f", 1)).toBe("g");
    expect(rotateCharacter("z", 1)).toBe("a");
    expect(rotateCharacter("A", 3)).toBe("D");
    expect(rotateCharacter("F", 1)).toBe("G");
    expect(rotateCharacter("Y", 2)).toBe("A");
    expect(rotateCharacter("7", 5)).toBe("7");
    expect(rotateCharacter("!", 5)).toBe("!");
    expect(rotateCharacter("a", 27)).toBe("b");
    expect(rotateCharacter("Z", 27)).toBe("A");
});