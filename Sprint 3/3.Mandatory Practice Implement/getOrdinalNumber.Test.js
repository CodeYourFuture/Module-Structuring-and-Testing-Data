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

test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
});

test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
});

test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
});

test("should return '102nd' for 102", () => {
    expect(getOrdinalNumber(102)).toEqual("102nd");
});