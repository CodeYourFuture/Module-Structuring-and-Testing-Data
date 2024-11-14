// getOrdinalNumber.test.js
const getOrdinalNumber = require('./getOrdinalNumber');

describe("getOrdinalNumber", () => {
    test("returns correct suffix for 1st, 2nd, 3rd, and other basic cases", () => {
        expect(getOrdinalNumber(1)).toBe("1st");
        expect(getOrdinalNumber(2)).toBe("2nd");
        expect(getOrdinalNumber(3)).toBe("3rd");
        expect(getOrdinalNumber(4)).toBe("4th");
    });

    test("handles special case for numbers ending in 11, 12, 13", () => {
        expect(getOrdinalNumber(11)).toBe("11th");
        expect(getOrdinalNumber(12)).toBe("12th");
        expect(getOrdinalNumber(13)).toBe("13th");
    });

    test("returns correct suffix for numbers ending in 1, 2, or 3 but not in the teens", () => {
        expect(getOrdinalNumber(21)).toBe("21st");
        expect(getOrdinalNumber(22)).toBe("22nd");
        expect(getOrdinalNumber(23)).toBe("23rd");
        expect(getOrdinalNumber(101)).toBe("101st");
        expect(getOrdinalNumber(102)).toBe("102nd");
    });

    test("handles large numbers with correct suffixes", () => {
        expect(getOrdinalNumber(1000)).toBe("1000th");
        expect(getOrdinalNumber(1001)).toBe("1001st");
        expect(getOrdinalNumber(1002)).toBe("1002nd");
        expect(getOrdinalNumber(1003)).toBe("1003rd");
    });

    test("returns '0th' for input 0", () => {
        expect(getOrdinalNumber(0)).toBe("0th");
    });
});
//feedback
// PASS  ./getOrdinalNumber.test.js
 // getOrdinalNumber
   // ✓ returns correct suffix for 1st, 2nd, 3rd, and other basic cases (x ms)
   // ✓ handles special case for numbers ending in 11, 12, 13 (x ms)
   // ✓ returns correct suffix for numbers ending in 1, 2, or 3 but not in the teens (x ms)
    //✓ handles large numbers with correct suffixes (x ms)
   // ✓ returns '0th' for input 0 (x ms)

//Test Suites: 1 passed, 1 total
//Tests:       5 passed, 5 total
//Snapshots:   0 total
//Time:        X seconds

