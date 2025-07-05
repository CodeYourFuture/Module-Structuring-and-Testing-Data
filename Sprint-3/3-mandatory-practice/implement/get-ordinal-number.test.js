const getOrdinalNumber = require("./get-ordinal-number");

// Case 1: Numbers ending in 1, but not 11
test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending in 2, but not 12
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// Case 3: Numbers ending in 3, but not 13
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(203)).toEqual("203rd");
});

// Case 4: Numbers ending in 11, 12, or 13
test("append 'th' to numbers ending in 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
});

// Case 5: Other numbers
test("append 'th' to all other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});

