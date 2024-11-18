// Implement a function repeat
function repeat(str, count) {
  // Check for invalid or negative count
  if (count < 0) {
    throw new Error("Count must be a non-negative integer.");
  }

  // Handle edge case for count of 0
  if (count === 0) {
    return "";
  }

  // Repeat the string count times
  return str.repeat(count);
}
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:
describe("repeat", () => {
  // case: repeat String:
  // Given a target string str and a positive integer count,
  // When the repeat function is called with these inputs,
  // Then it should repeat the str count times and return a new string containing the repeated str values.
  test("should repeat the string count times", () => {
    const str = "hello";
    const count = 3;
    expect(repeat(str, count)).toBe("hellohellohello");
  });
  // case: handle Count of 1:
  // Given a target string str and a count equal to 1,
  // When the repeat function is called with these inputs,
  // Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.
  test("should return the original string if count is 1", () => {
    const str = "world";
    const count = 1;
    expect(repeat(str, count)).toBe("world");
  });
  // case: Handle Count of 0:
  // Given a target string str and a count equal to 0,
  // When the repeat function is called with these inputs,
  // Then it should return an empty string, ensuring that a count of 0 results in an empty output.
  test("should return an empty string if count is 0", () => {
    const str = "test";
    const count = 0;
    expect(repeat(str, count)).toBe("");
  });
  // case: Negative Count:
  // Given a target string str and a negative integer count,
  // When the repeat function is called with these inputs,
  // Then it should throw an error or return an appropriate error message, as negative counts are not valid.
  test("should throw an error if count is negative", () => {
    const str = "error";
    const count = -1;
    expect(() => repeat(str, count)).toThrow(
      "Count must be a non-negative integer."
    );
  });

  test("should handle empty string input", () => {
    const str = "";
    const count = 5;
    expect(repeat(str, count)).toBe(""); // Repeating an empty string still results in an empty string
  });
});
