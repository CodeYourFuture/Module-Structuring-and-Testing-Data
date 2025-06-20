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
// When the number is 2,
// Then the function should return "2nd" 
 test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
    test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    });

// Case 4: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"
    test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th")
    });

// Case 5: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"
    test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    });

// Case 6: Identify the ordinal number for 42
// When the number is 42,
// Then the function should return "42nd"
    test("should return '42nd' for 42", () => {
    expect(getOrdinalNumber(42)).toEqual("42nd");
    });

// Case 7: Identify the ordinal number for 113
// When the number is 113,
// Then the function should return "113th"
    test("should return '113th' for 113", () => {
    expect(getOrdinalNumber(113)).toEqual("113th");
    });

// Case 8: Identify the ordinal number for 1472
// When the number is 1472,
// Then the function should return "1472nd"
    test("should return '1472nd' for 1472", () => {
    expect(getOrdinalNumber(1472)).toEqual("1472nd");
    });

// Case 9: Identify the ordinal number for 2480
// When the number is 2480,
// Then the function should return "2480th"
    test("should return 2480th for input 2480", () => {
    expect(getOrdinalNumber(2480)).toEqual("2480th");
    });

// Case 10: Identify the ordinal number for 54661
// When the number is 54661,
// Then the function should return "54661st"
    test("should return '54661st' for 54661", () => {
    expect(getOrdinalNumber(54661)).toEqual("54661st");
    });

// Case 11: Identify the ordinal number for 0
// When the number is 0,
// Then the function should return "0"
    test("should return '0th' for 0", () => {
    expect(getOrdinalNumber(0)).toEqual("0th");
    });

// Case 12: Identify the ordinal number for -7
// When the number is -4,
// Then the function should return "Invalid input"
test("should return 'Invalid input' for negative numbers", () => {
  expect(getOrdinalNumber(-7)).toEqual("Invalid input");
});

    