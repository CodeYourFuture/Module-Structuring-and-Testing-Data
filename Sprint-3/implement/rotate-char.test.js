const {rotateCharacter} = require("./rotate-char");

describe("rotateCharacter", () => {
    test("should rotate lowercase letters correctly", () => {
        expect(rotateCharacter("a", 3)).toBe("d");
    });
});
    test("should rotate uppercase letters correctly", () => {
        expect(rotateCharacter("A", 3)).toBe("D");
    });

    test("should leave non-letter characters unchanged", () => {
        expect(rotateCharacter("7", 5)).toBe("7");
        expect(rotateCharacter(" ", 3)).toBe(" ");
        expect(rotateCharacter("!", 10)).toBe("!");
    });

    test("should handle wraparound for lowercase letters", () => {
        expect(rotateCharacter("z", 1)).toBe("a");
        expect(rotateCharacter("y", 2)).toBe("a");
    });

    test("should handle wraparound for uppercase letters", () => {
        expect(rotateCharacter("Z", 1)).toBe("A");
        expect(rotateCharacter("Y", 2)).toBe("A");
    });

    test("should rotate letters by larger shifts", () => {
        expect(rotateCharacter("a", 26)).toBe("a");
        expect(rotateCharacter("A", 27)).toBe("B");
        expect(rotateCharacter("m", 52)).toBe("m");
    });

