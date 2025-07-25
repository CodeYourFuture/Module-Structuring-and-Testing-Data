const getOrdinalNumber = require("./get-ordinal-number");

test("should add 'st' for numbers ending in 1 except(11)",() => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("should add 'nd' for numbers ending in 2 except(12)", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(102)).toBe("102nd");
});

test("should add 'rd' for numbers ending in 3 except(13)", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(23)).toBe("23rd");
});


test("adds 'th' for 11, 12, and 13", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
});

test("adds 'th' for all other numbers", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(100)).toBe("100th");
    expect(getOrdinalNumber(214)).toBe("214th");
});