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


// numbers ending in 1 => st
test.each([21,31,121])("should return 'st' for every number ending in 1, except 11", 
    (num) => {
    expect(getOrdinalNumber(num)).toEqual(`${num}st`);}
);


// numbers ending in 2 => nd
test.each([2,22,32,122])("should return 'nd' for every number ending in 2", 
    (num) => {
    expect(getOrdinalNumber(num)).toEqual(`${num}nd`);}
);


// numbers ending in 3 => rd
test.each([3,23,33,123,1123])("should return 'rd' for every number ending in 3", 
    (num) => {
    expect(getOrdinalNumber(num)).toEqual(`${num}rd`);}
);

// 4th, 5th, 6th, 7th, 8th, 9th, 10th
test.each([4,5,6,7,8,9,10])("should return 'th' for numbers 4-10",
    (num) => {
        expect(getOrdinalNumber(num)).toEqual(`${num}th`);
    }
);

// 11th
test("should return '11th' for the number 11", () => {
    expect(getOrdinalNumber(11)).toEqual('11th');
});

// ends in 4,5,6,7,8,9,0 => th
test.each([14,15,16,17,18,19,20,124,125,126,127,128,129,1230])("should return 'th' for numbers ending in 4,5,6,7,8,9 or 0", 
    (num) => {
        expect(getOrdinalNumber(num)).toEqual(`${num}th`);
    }
);
