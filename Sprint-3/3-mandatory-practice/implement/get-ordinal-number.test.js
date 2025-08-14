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

// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    });

// When the number is 21,
// Then the function should return "21st"
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    });

// When the number is 22,
// Then the function should return "22nd"
test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toEqual("22nd");
    });


// When the number is 23,
// Then the function should return "23rd"
test("should return '23rd' for 23", () => {
    expect(getOrdinalNumber(23)).toEqual("23rd");
    });

// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

// When the number something else
// THen the function should return "14th"
test("should return '14th' for 14", () => {
    expect(getOrdinalNumber(14)).toEqual("14th");
});