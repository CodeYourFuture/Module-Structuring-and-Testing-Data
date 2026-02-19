const getOrdinalNumber = require("./get-ordinal-number");

// Case 1: Numbers ending with 1 (but not in 11)
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  const numbers = [1, 21, 131];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}st`);
  }
});

// Case 2: Numbers ending with 11
test("should append 'th' for numbers ending with 11", () => {
  const numbers = [11, 111, 700011];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}th`);
  }
});

// Case 3: Numbers ending with 2 (but not in 12)
test("should append 'nd' for numbers ending in 2", () => {
  const numbers = [2, 22, 32, 502];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}nd`);
  }
});

// Case 4: Numbers ending with 12
test("should append 'th' for numbers ending in 12", () => {
  const numbers = [12, 212, 312, 5012];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}th`);
  }
});

// Case 5: Numbers ending in 3 (but not in 13)
test("should append 'rd' for numbers ending in 3 (but not 13)", () => {
  const numbers = [3, 23, 33, 1063];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}rd`);
  }
});

// Case 6: Numbers ending in 13
test("should append 'th' for numbers ending in 13", () => {
  const numbers = [13, 113, 613, 713];

  for (const number of numbers) {
    expect(getOrdinalNumber(number)).toEqual(`${number}th`);
  }
});

// Case 7: Numbers ending in 4-10
test("should append 'th' for numbers ending in 4-10", () => {
  const lastDigits = [4, 5, 6, 7, 8, 9, 10];
  const bases = [0, 10, 50, 90, 100];

  for (const lastDigit of lastDigits) {
    for (const base of bases) {
      const finalNumber = base + lastDigit;
      expect(getOrdinalNumber(finalNumber)).toEqual(`${finalNumber}th`);
    }
  }
});

// Case 8: Negative numbers
test("should return ordinal number for negative integer input", () => {
  const ordinals = [
    { a: -2, b: "-2nd" },
    { a: -1, b: "-1st" },
    { a: -3, b: "-3rd" },
    { a: -4, b: "-4th" },
    { a: -11, b: "-11th" },
    { a: -12, b: "-12th" },
    { a: -13, b: "-13th" },
  ];

  for (const { a, b } of ordinals) {
    expect(getOrdinalNumber(a)).toEqual(b);
  }
});

// Case 9: Decimal representations of integers
test("should return ordinal number for integer in decimal form", () => {
  const ordinals = [
    { a: 1.0, b: "1st" },
    { a: 2.0, b: "2nd" },
    { a: 3.0, b: "3rd" },
    { a: 4.0, b: "4th" },
    { a: -11.0, b: "-11th" },
    { a: -12.0, b: "-12th" },
    { a: -13.0, b: "-13th" },
  ];

  for (const { a, b } of ordinals) {
    expect(getOrdinalNumber(a)).toEqual(b);
  }
});

// Case 10: Invalid entries
test("should throw error for invalid inputs", () => {
  const invalidEntries = [
    "one",
    "",
    [1],
    null,
    undefined,
    9.5,
    8.00001,
    {},
    true,
  ];

  for (const entry of invalidEntries) {
    expect(() => {
      getOrdinalNumber(entry);
    }).toThrow();
  }
});
