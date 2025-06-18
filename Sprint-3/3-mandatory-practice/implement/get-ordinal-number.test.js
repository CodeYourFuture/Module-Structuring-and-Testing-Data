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


// 1st, 11th, 21st, 31st
// 2nd
// 3rd
// 4th, 5th, 6th, 7th, 8th, 9th, 10th

// ends in 1 => st, EXCEPT for 11 => 11th
//ends in 2 => nd
// end in 3 => rd
// ends in 4,5,6,7,8,9,0 => th
