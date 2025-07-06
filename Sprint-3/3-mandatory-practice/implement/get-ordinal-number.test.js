const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: 'st' suffix for numbers ending in 1 (excluding 11)
test("appends 'st' to numbers ending in 1, except those ending in 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(54661)).toEqual("54661st");
});

// Case 2: 'nd' suffix for numbers ending in 2 (excluding 12)
test("appends 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(42)).toEqual("42nd");
    expect(getOrdinalNumber(1472)).toEqual("1472nd");
});

// Case 3: 'rd'  suffix for numbers ending in 3 (excluding 13)
test("appends 'rd' to numbers ending in 3, except those ending in 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: 'th' suffix for special cases 11, 12, 13
test("appends 'th' to numbers ending in 11, 12, 13 (special cases)", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(113)).toEqual("113th");
});

// Case 5: For general cases (not ending in 1, 2, or 3) apply 'th' suffix
test("appends 'th' to numbers not ending in 1, 2, or 3", () => {
    expect(getOrdinalNumber(0)).toEqual("0th");
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(2480)).toEqual("2480th");
});

// Case 6: Input validation for negative number
test("returns 'Invalid input' for negative numbers", () => {
    expect(getOrdinalNumber(-7)).toEqual("Invalid input");
});

