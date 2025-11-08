const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback



test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(221)).toEqual("221st");
  expect(getOrdinalNumber(191)).toEqual("191st");
});
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect( getOrdinalNumber(2) ).toEqual("2nd");
    expect( getOrdinalNumber(22) ).toEqual("22nd");
    expect( getOrdinalNumber(132) ).toEqual("132nd");
});
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
    expect( getOrdinalNumber(3 )).toEqual("3rd");
    expect( getOrdinalNumber(33 ) ).toEqual("33rd");
    expect( getOrdinalNumber(133) ).toEqual("133rd");
});


test("append 'th'to numbers ending in 4-9 or ending with 11,12,13", () => {
  expect(getOrdinalNumber(99)).toEqual("99th");
  expect(getOrdinalNumber(234)).toEqual("234th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(313)).toEqual("313th");
});


test("should throw Invalid Input for negative numbers or 0", () => {
  expect(getOrdinalNumber(-5)).toEqual("Invalid Input");
    expect(getOrdinalNumber(0)).toEqual("Invalid Input");
});
