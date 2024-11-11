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
function repeat(string, integer) {
  let string1 = string;
  if (integer == 0) return " ";
  if (integer < 0) return "Negative numbers as a repetition is not allowed";

  for (let i = 1; i < integer; i++) {
    string1 = string1 + " " + string;
  }
  return string1;
}
//console.log(repeat("string", 0));

it("should return `Hello World Hello World`", () => {
  expect(repeat("Hello World", 2)).toBe("Hello World Hello World");
});
it("should return `Hi my FRIEND`", () => {
  expect(repeat("Hi my FRIEND", 1)).toBe("Hi my FRIEND");
});
it("should return ` `", () => {
  expect(repeat(`WHERE ARE YOU?`, 0)).toBe(" ");
});
test("should rtuen `Negative numbers as a repetition is not allowed` ", () => {
  expect(repeat("Y e S", -1)).toBe(
    "Negative numbers as a repetition is not allowed"
  );
  expect(repeat("No", -5)).toBe(
    "Negative numbers as a repetition is not allowed"
  );
});
