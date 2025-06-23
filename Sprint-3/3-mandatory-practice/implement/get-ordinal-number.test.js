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

// Case 2: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

// Case 3: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"

test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
    });

// Case 4: Identify the ordinal number for 31
// When the number is 31,
// Then the function should return "31st"

    test("should return '31st' for 31", () => {
    expect(getOrdinalNumber(31)).toEqual("31st");
    });

// Case 5: Identify the ordinal number for 83
// When the number is 83,
// Then the function should return "83rd"

test("should return '83rd' for 83", () => {
    expect(getOrdinalNumber(83)).toEqual("83rd");
    });

// Case 6: Identify the ordinal number for 50
// When the number is 50,
// Then the function should return "50th"

test("should return '50th' for 50", () => {
    expect(getOrdinalNumber(50)).toEqual("50th");
    });

// Case 7: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"

test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });