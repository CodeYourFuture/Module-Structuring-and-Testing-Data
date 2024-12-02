const countChar = require('./count.js'); 

describe('countChar', () => {

    test('should return the correct count for multiple occurrences (with overlap)', () => {
        expect(countChar("aaaaa", "a")).toBe(5);
        expect(countChar("hello", "l")).toBe(2);
    });

    test('should return 0 when there are no occurrences', () => {
        expect(countChar("hello", "z")).toBe(0);
        expect(countChar("abc", "x")).toBe(0);
    });

    test('should return correct count for edge cases', () => {

        expect(countChar("", "a")).toBe(0);


        expect(countChar("aA", "a")).toBe(1);
        expect(countChar("aA", "A")).toBe(1);


        expect(countChar("$$$$$", "$")).toBe(5);
    });
});

