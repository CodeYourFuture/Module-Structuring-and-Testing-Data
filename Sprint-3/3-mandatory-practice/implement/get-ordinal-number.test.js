const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });
    // case 2:
    test("should return '2nd' for 2", () => {
        expect(getOrdinalNumber(2)).toEqual("2nd");
    });
// Case 3: Identify the ordinal number for 3
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify the ordinal number for 4
test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
});

// Case 5: Check for numbers ending in 11, 12, 13 (special cases)
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
});
test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
});
test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 6: Check for larger numbers
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
});
test("should return '32nd' for 32", () => {
    expect(getOrdinalNumber(32)).toEqual("32nd");
});
test("should return '43rd' for 43", () => {
    expect(getOrdinalNumber(43)).toEqual("43rd");
});
test("should return '100th' for 100", () => {
    expect(getOrdinalNumber(100)).toEqual("100th");
});

// Case 7: Handle invalid input.
//  an error for negative numbers and for non-number inputs. I can make it. (: 