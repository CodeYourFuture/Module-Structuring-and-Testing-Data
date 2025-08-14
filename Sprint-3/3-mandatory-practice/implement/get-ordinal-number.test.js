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


//test case for numbers ending with -11
test("should return '-th' for numbers ending with 11", () => {
    expect(getOrdinalNumber(911)).toEqual("911th");
    });

//test case for numbers ending with -12
test("should return '-th' for numbers ending with 12", () => {
    expect(getOrdinalNumber(3012)).toEqual("3012th");
    });

//test case for numbers ending with -13
test("should return '-th' for numbers ending with 13", () => {
    expect(getOrdinalNumber(12513)).toEqual("12513th");
    });

//test case for all other number ending in 1 
test("should return '-st' for any other number ending in 1", () => {
    expect(getOrdinalNumber(541)).toEqual("541st");
    });

//test case for all other number ending in 2 
test("should return '-nd' for any other number ending in 2", () => {
    expect(getOrdinalNumber(32)).toEqual("32nd");
    });

//test case for all other number ending in 3 
test("should return '-rd' for any other number ending in 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    });

//test case for all other number to end with "-th" 
test("should return '-th' for all other numbers", () => {
    expect(getOrdinalNumber(777)).toEqual("777th");
    });