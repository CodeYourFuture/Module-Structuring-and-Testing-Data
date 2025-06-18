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
test("should return '2nd' for 2", () => {
    expect((getOrdinalNumber(2))).toEqual("2nd");
    });

test("should return '3rd' for 3", () => {
    expect((getOrdinalNumber(3))).toEqual("3rd");
    });

test("should return '4th' for 4", () => {
    expect((getOrdinalNumber (4))).toEqual("4th");
    });

test("should return '11th' for 11", () => {
    expect((getOrdinalNumber(11))).toEqual("11th");
    });

test("should return '22nd' for 22", () => {
    expect((getOrdinalNumber(22))).toEqual("22nd");
    });

test("should return '33rd' for 33", () => {
    expect((getOrdinalNumber(33))).toEqual("33rd");         
});
