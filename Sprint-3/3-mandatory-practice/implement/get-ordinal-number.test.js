const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should append 'st' to numbers ending with 1 and not ending with 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(41)).toEqual("41st");
    });



test("should append 'nd' to numbers ending with 2", () => {
    expect(getOrdinalNumber(62)).toEqual("62nd");
});

test("should append 'rd' to numbers ending with 3", () => {
    expect(getOrdinalNumber(93)).toEqual("93rd");
});


test("should append 'th' to numbers ending (4-9)", () => {
    expect(getOrdinalNumber(8)).toEqual("8th");
});

test("should append 'th' to numbers ending (11-13)", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
});