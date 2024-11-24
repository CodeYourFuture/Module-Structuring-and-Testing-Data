const countChar = require("./count");

test("multiple Occurrences", function () {
  const input = 5;
  const output = countChar(input);
  expect(output).toBe("aaaaa"); // Expected result is '1st'
});

const countChar = require("./countChar");

describe("countChar", () => {
  test("counts multiple occurrences of a character", () => {
    const str = "aaaaa";
    const char = "a";
    expect(countChar(str, char)).toBe(5);
  });

  test("returns 0 when the character does not exist in the string", () => {
    const str = "paralelepipedo";
    const char = "z";
    expect(countChar(str, char)).toBe(0);
  });

  test("is case-sensitive", () => {
    const str = "AaAaA";
    const char = "a";
    expect(countChar(str, char)).toBe(2);
  });

  test("returns 0 for an empty string", () => {
    const str = "";
    const char = "a";
    expect(countChar(str, char)).toBe(0);
  });

  test("handles strings with no matching characters", () => {
    const str = "hello";
    const char = "z";
    expect(countChar(str, char)).toBe(0);
  });
});

