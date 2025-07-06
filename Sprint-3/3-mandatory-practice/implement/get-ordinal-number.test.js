const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

// Case 2: identify the ordinal number for 2
// when the number is ,
// then the function should return "2nd"

test("should return '2nd' for2", () => { 
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// Case 3: identify the ordinal number for 30
// when the number is ,
// then the function should return "30th"

test("should return '30th' for30", () => { 
    expect(getOrdinalNumber(30)).toEqual("30th");
    });

// Case 4: 3rd
test("should return '3rd' for 3", () => { 
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 5: 11th (special teen case)
test("should return '11th' for 11", () => { 
  expect(getOrdinalNumber(11)).toEqual("11th");
});
