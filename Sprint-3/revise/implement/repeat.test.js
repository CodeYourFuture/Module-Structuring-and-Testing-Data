const repeatString = require("./repeat");

describe("Repeat String Function", () => {
  test("should return repeated string if count is greater than 1", () => {
    expect(repeatString("Hello", 3)).toEqual("Hello Hello Hello");
  });

  test("should return the string if count is 1", () => {
    expect(repeatString("Hello", 1)).toEqual("Hello");
  });

  test("should return empty string if count is 0", () => {
    expect(repeatString("Hello", 0)).toEqual("");
  });

  test("should return an error message if count is negative", () => {
    expect(() => repeatString("test", -1)).toThrow("Count cannot be negative");
  });
});
