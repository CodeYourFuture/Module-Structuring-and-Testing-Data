const repeatStr = require("./repeat-str");

// Case 1: handle count of 1
test("should repeat the string count times", () => {
  const repeats = [
    { a: "hello", b: 1, c: "hello" },
    { a: "Silo", b: 1, c: "Silo" },
    { a: "Ugly Betty", b: 1, c: "Ugly Betty" },
    { a: "ByteOil", b: 1, c: "ByteOil" },
  ];

  for (const { a, b, c } of repeats) {
    expect(repeatStr(a, b)).toEqual(c);
  }
});

// Case 2: handle count greater than 1
test("should return the original string repeated", () => {
  const repeats = [
    { a: "hello", b: 3, c: "hellohellohello" },
    { a: "CYF ", b: 5, c: "CYF CYF CYF CYF CYF " },
    {
      a: "My Year of Meat",
      b: 2,
      c: "My Year of MeatMy Year of Meat",
    },
    { a: "Y2K", b: 10, c: "Y2KY2KY2KY2KY2KY2KY2KY2KY2KY2K" },
  ];

  for (const { a, b, c } of repeats) {
    expect(repeatStr(a, b)).toEqual(c);
  }
});

// Case 3: Handle count of 0
test("should return an empty string when count is 0", () => {
  const repeats = [
    { a: "The Office", b: 0, c: "" },
    { a: "Angela Martin", b: 0, c: "" },
    { a: "Michael Scott", b: 0, c: "" },
    { a: "Kevin Malone", b: 0, c: "" },
  ];

  for (const { a, b, c } of repeats) {
    expect(repeatStr(a, b)).toEqual(c);
  }
});

// Case 4: Handle negative count
test("should return an empty string when count is negative", () => {
  const repeats = [
    { a: "Osuofia in London", b: -1 },
    { a: "Nkem Owoh", b: -5 },
    { a: "Mara Derwent", b: -10 },
    { a: "Cynthia Okereke", b: -100 },
  ];

  for (const { a, b } of repeats) {
    expect(() => repeatStr(a, b)).toThrow();
  }
});

// Case 5: Handle non-string input
test("should throw an error when input is not a string", () => {
  const repeats = [
    { a: 123, b: 3 },
    { a: "123", b: "3" },
    { a: "true", b: true },
    { a: null, b: 1 },
    { a: "undefined", b: undefined },
    { a: {}, b: 4 },
    { a: [], b: 0 },
  ];

  for (const { a, b } of repeats) {
    expect(() => repeatStr(a, b)).toThrow();
  }
});
