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

 test("should return '2nd' for 2", () => {
        expect(getOrdinalNumber(2)).toEqual("2nd");
        });

test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

test ("should return '3rd'for 3",() => {
    expect(getOrdinalNumber(3)).toEqual("3rd")
});

test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
    });

test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
    });

test ("should return '30th' for 30", () =>{
    expect(getOrdinalNumber(30)).toEqual("30th");
});

test ("should return '113th' for 113", () =>{
    expect(getOrdinalNumber(113)).toEqual("113th");
});

test ("should return '111th' for 111", () =>{
    expect(getOrdinalNumber(111)).toEqual("111th");
});
