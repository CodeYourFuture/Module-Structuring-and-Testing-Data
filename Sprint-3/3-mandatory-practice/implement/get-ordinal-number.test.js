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

// Case 2: Identify the ordinal number for 2
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

// Case 5: Identify the ordinal number for 5
test("should return '5th' for 5", () => {
    expect(getOrdinalNumber(5)).toEqual("5th");
    });     

// Case 6: Identify the ordinal number for 6
test("should return '6th' for 6", () => {
    expect(getOrdinalNumber(6)).toEqual("6th");
    });

// Case 7: Identify the ordinal number for 7
test("should return '7th' for 7", () => {
    expect(getOrdinalNumber(7)).toEqual("7th");
    });

// Case 8: Identify the ordinal number for 8
test("should return '8th' for 8", () => {
    expect(getOrdinalNumber(8)).toEqual("8th");
    });

// Case 9: Identify the ordinal number for 9
test("should return '9th' for 9", () => {
    expect(getOrdinalNumber(9)).toEqual("9th");
    });

// Case 10: Identify the ordinal number for 10
test("should return '10th' for 10", () => {
    expect(getOrdinalNumber(10)).toEqual("10th");
    });