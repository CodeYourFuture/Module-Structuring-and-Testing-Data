const getOrdinalNumber = require("./get-ordinal-number");

describe("Numbers ending with 1", () => {
  test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(131)).toEqual("131st");
  });
});
describe("Numbers ending with 2", () => {
  test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(432)).toEqual("432nd");
  });
});
describe("Numbers ending with 3", () => {
  test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(33)).toEqual("33rd");
    expect(getOrdinalNumber(203)).toEqual("203rd");
  });
});
describe("Numbers ending with th", () => {
  test("should append 'th' for numbers ending with 4-0, except those ending with 11, 12, 13", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(66)).toEqual("66th");
    expect(getOrdinalNumber(100)).toEqual("100th");
  });
});
describe("Numbers ending with th", () => {
  test("should append 'th' for numbers ending with 11, 12, 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(111)).toEqual("111th");
    expect(getOrdinalNumber(212)).toEqual("212th");
    expect(getOrdinalNumber(313)).toEqual("313th");
  });
});
