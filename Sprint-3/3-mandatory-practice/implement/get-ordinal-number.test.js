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


test("should return '2nd' for 2",() => {
    expect(getOrdinalNumber(2).toEqual("2nd"));
});


test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber.toEqual("3rd"));
});


Test("should return '10th' for 10", () => {
    expect(getOrdinalNumber.toEqual("10th"));
});


test("should return '21st' for 21", () => {
    expect(getOrdinalNumber.toEqual("21st"));
});


test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber.toEqual("22nd"));
});


test("should return '23rd' for 23", () => {
    expect(getOrdinalNumber.toEqual("23rd"));
});


test("should return '101st' for 101", () => {
    expect(getOrdinalNumber.toEqual("101st"));
});