const repeatString = require("./repeat");

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected "${actualOutput}" to equal "${targetOutput}"`
  );
}

describe("repeatString Function Tests", () => {
  test("Repeats string 3 times", () => {
    const result = repeatString("hello", 3);
    assertEquals(result, "hello hello hello");
  });

  test("Repeats string 1 time", () => {
    const result = repeatString("world", 1);
    assertEquals(result, "world");
  });

  test("Repeats string 0 times", () => {
    const result = repeatString("test", 0);
    assertEquals(result, "");
  });

  test("Handles negative count", () => {
    const result = repeatString("errorTest", -2);
    assertEquals(result, "error your number is negative");
  });
});

console.log("All test cases executed!");
