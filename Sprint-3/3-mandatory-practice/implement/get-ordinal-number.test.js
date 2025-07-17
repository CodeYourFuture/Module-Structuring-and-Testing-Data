const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st".

test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(141)).toEqual("141st");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
  });
// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");

});
  // Case 4: Identify the ordinal number for 11,12,13
// When the number is 11,12,13,
// Then the function should return "11th","12th","13th"
// test("should append 'th' to numbers ending in:10,11,12,13 ", () => {
//     expect(getOrdinalNumber(11)).toEqual("11th");
//     expect(getOrdinalNumber(10)).toEqual("10th");
//     expect(getOrdinalNumber(13)).toEqual("13th");
//   });
    // Case 5: Identify the ordinal number for 6
// When the number is 6
// Then the function should return "6th"
test("should append 'th' to numbers whose last digits are between 4 and 13 inclusive", () => {
    expect(getOrdinalNumber(6)).toEqual("6th");
    expect(getOrdinalNumber(19)).toEqual("19th");
    expect(getOrdinalNumber(204)).toEqual("204th");
  });
// Case 6: Identify NaN
// When the number is NaN
// Then the function should return "NaN"
test("should return 'NaN' for NaN", () => {
    expect(getOrdinalNumber(NaN)).toEqual("NaN");
  });

 