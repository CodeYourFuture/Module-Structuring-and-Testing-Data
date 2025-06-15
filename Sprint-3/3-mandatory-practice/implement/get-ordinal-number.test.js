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

// Case 3: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"

test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
}
);

// Case 4: Identify the ordinal number for 111
// When the number is 111,
// Then the function should return "111th"

test("should return '111th' for 111", () => {
    expect(getOrdinalNumber(111)).toEqual("111th");
});
