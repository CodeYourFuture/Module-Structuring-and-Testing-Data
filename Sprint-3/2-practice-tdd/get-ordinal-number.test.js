const getOrdinalNumber = require("./get-ordinal-number");

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should handle numbers ending in 1 (except 11)", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(31)).toEqual("31st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("should handle numbers ending in 2 (except 12)", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(42)).toEqual("42nd");
});

test("should handle numbers ending in 3 (except 13)", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
});

test("should handle special cases 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should handle numbers ending in 4-9, 0", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(10)).toEqual("10th");
});

test("should return '100th' for 100", () => {
  expect(getOrdinalNumber(100)).toEqual("100th");
});

test("should return '24th' for 24", () => {
  expect(getOrdinalNumber(24)).toEqual("24th");
});

test("should return '111th' for 111", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});

test("should return '112th' for 112", () => {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("should return '113th' for 113", () => {
  expect(getOrdinalNumber(113)).toEqual("113th");
});
