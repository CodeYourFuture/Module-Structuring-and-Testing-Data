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
    
test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
    });


//Reasonable tests, and they pass! 
// We might benefit from a couple more assertions here just to be sure, for example trying the number 23.

test("should return '23rd' for 23", () => {
    expect(getOrdinalNumber(23)).toEqual('23rd')
});
console.log(getOrdinalNumber(23));
