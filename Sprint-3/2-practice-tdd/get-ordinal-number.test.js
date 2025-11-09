const getOrdinalNumber = require("./get-ordinal-number");


// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Numbers ending in 1 (but not 11)
test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(111)).toEqual("111th"); // exception
});

// Case 2: Numbers ending in 2 (but not 12)
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(112)).toEqual("112th"); // exception
});
// Case 3: Numbers ending in 3 (but not 13)
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(113)).toEqual("113th"); // exception
});
// Case 4: Numbers ending in 4–9 or exceptions (11, 12, 13)
test("append 'th' to numbers ending in 4–9 or ending with 11, 12, or 13", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});
  // Optional: edge cases
  test("should handle 0 and large numbers correctly", () => {
    expect(getOrdinalNumber(0)).toBe("0th");
    expect(getOrdinalNumber(1000001)).toBe("1000001st"); // ends with 1, not teen
    expect(getOrdinalNumber(1000012)).toBe("1000012th"); // ends with 12 -> teen
  
  });



