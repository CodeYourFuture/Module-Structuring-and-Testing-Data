const getOrdinalNumber = require("./get-ordinal-number");

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});

test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
});

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toBe("12th");
});

test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toBe("22nd");
});

test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toBe("23rd");
});

test("should return '24th' for 24", () => {
  expect(getOrdinalNumber(24)).toBe("24th");
});

test("should return '101st' for 101", () => {
  expect(getOrdinalNumber(101)).toBe("101st");
});

test("should return '111th' for 111", () => {
  expect(getOrdinalNumber(111)).toBe("111th");
});

test("should return '0th' for 0", () => {
  expect(getOrdinalNumber(0)).toBe("0th");
});

test("should return '-1st' for -1", () => {
  expect(getOrdinalNumber(-1)).toBe("-1st");
});

test("should return '-2nd' for -2", () => {
  expect(getOrdinalNumber(-2)).toBe("-2nd");
});

test("should return '-3rd' for -3", () => {
  expect(getOrdinalNumber(-3)).toBe("-3rd");
});

test("should return '-11th' for -11", () => {
  expect(getOrdinalNumber(-11)).toBe("-11th");
});

test("should return '1000th' for 1000", () => {
  expect(getOrdinalNumber(1000)).toBe("1000th");
});