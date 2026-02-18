const countChar = require("./count");

// Scenario 1: Multiple Occurrences
test("Should count multiple occurrences of a character", () => {
  const multipleOccurrences = [
    { a: "aaaaa", b: "a", c: 5 },
    { a: "sea saw", b: "s", c: 2 },
    { a: "Arrested Development", b: "d", c: 2 },
    { a: "* Star * TV *", b: "*", c: 3 },
  ];

  for (const { a, b, c } of multipleOccurrences) {
    expect(countChar(a, b)).toEqual(c);
  }
});

// Scenario 2: Single Occurrence
test("Should count single occurrence of a character", () => {
  const singleOccurrences = [
    { a: "a", b: "a" },
    { a: "Star Light", b: "i" },
    { a: "!@#$%^&*()", b: "#" },
    { a: "Why fly?", b: " " },
  ];

  for (const { a, b } of singleOccurrences) {
    expect(countChar(a, b)).toEqual(1);
  }
});

// Scenario 3: No Occurrence
test("Should return 0 for no occurrence of a character", () => {
  const noOccurrences = [
    { a: "The Rookie", b: "S" },
    { a: "Angela Bassett", b: "r" },
    { a: "Santa Clarita Diet", b: "*" },
    { a: "Better Off Ted", b: "9" },
  ];

  for (const { a, b } of noOccurrences) {
    expect(countChar(a, b)).toEqual(0);
  }
});

// Scenario 4: Invalid Entries
test("Should throw an error when given an invalid input", () => {
  const invalidEntries = [
    { a: "Courage, the Cowardly Dog", b: "dog" },
    { a: "Sheep in the Big City", b: 1 },
    { a: -205, b: "a" },
    { a: -205, b: 55.5 },
    { a: true, b: "f" },
    { a: undefined, b: "f" },
    { a: null, b: true },
    { a: false, b: true },
    { a: [false], b: {} },
  ];

  for (const { a, b } of invalidEntries) {
    expect(() => {
      countChar(a, b);
    }).toThrow();
  }
});
