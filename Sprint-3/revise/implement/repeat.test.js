// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str, count) {
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  return str.repeat(count);
}


describe("repeat() tests", () => {
  test("Repeat string", () => {
    expect(repeat("hello", 4)).toBe("hellohellohellohello");
    expect(typeof repeat("hello", 4)).toBe("string");
  });

  test("Handle count of 1", () => {
    expect(repeat("darkness", 1)).toBe("darkness");
    expect(typeof repeat("darkness", 1)).toBe("string");
  });

  test("Handle count of 0", () => {
    expect(repeat("my", 0)).toBe("");
    expect(typeof repeat("my old", 0)).toBe("string");
    expect(repeat("my", 0).length).toBe(0);
  });

  test("Negative Count", () => {
    expect(() => {
      repeat("friend", -1);
    }).toThrow("Negative counts are not valid");
  });
});
