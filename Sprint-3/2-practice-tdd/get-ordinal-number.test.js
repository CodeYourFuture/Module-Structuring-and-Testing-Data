const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("append 'nd' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect( getOrdinalNumber(21) ).toEqual("21st");
  expect( getOrdinalNumber(131) ).toEqual("131st");
});

test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect( getOrdinalNumber(2) ).toEqual("2nd");
    expect( getOrdinalNumber(22) ).toEqual("22nd");
    expect( getOrdinalNumber(132) ).toEqual("132nd");
});
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect( getOrdinalNumber(33) ).toEqual("33rd");
    expect( getOrdinalNumber(133) ).toEqual("133rd");
});   
test("append 'th' to numbers ending in 4, except those ending in 14", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect( getOrdinalNumber(24) ).toEqual("24th");
    expect( getOrdinalNumber(134) ).toEqual("134th");
});   
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});