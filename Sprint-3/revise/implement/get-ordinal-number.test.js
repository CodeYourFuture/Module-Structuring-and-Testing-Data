// get-ordinal-number.test.js
const getOrdinalNumber = require("./ordinal");

describe("getOrdinalNumber", () => {
  test("handles numbers ending in 1, 2, 3", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(3)).toEqual("3rd");
  });

  // Additional tests...
});
