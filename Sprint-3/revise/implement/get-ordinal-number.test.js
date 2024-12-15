// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const {getOrdinalNumber} = require ('./get-ordinal-number');
describe("getOrdinalNumber function", () => {

//Error cases
test("Please enter a valid string", () => {
    expect(() =>getOrdinalNumber(null)).toThrow("Please enter a valid number"); //must have an entry
    expect(() =>getOrdinalNumber(undefined)).toThrow("Please enter a valid number"); //must be an entry
})   

//Invalid cases
test("should return 'Please enter a valid number'", () => {
    expect(getOrdinalNumber("-1")).toBe("Please enter a valid number");
    expect(getOrdinalNumber("0")).toBe("Please enter a valid number");
}); 

//Typical cases
test("should return 'numst' if any number ending in 1 except 11 is input", () => {
    expect(getOrdinalNumber("1")).toBe("1st");
    expect(getOrdinalNumber("21")).toBe("21st");
}); 

test("should return 'numnd' if any number ending in 2 except 12 is input", () => {
    expect(getOrdinalNumber("2")).toBe("2nd");
    expect(getOrdinalNumber("22")).toBe("22nd");
}); 

test("should return 'numrd' if any number ending in 3 except 13 is input", () => {
    expect(getOrdinalNumber("3")).toBe("3rd");
    expect(getOrdinalNumber("23")).toBe("23rd");
}); 

test("should return 'numth' if any other number or 11, 12 and 13 are input", () => {
    expect(getOrdinalNumber("4")).toBe("4th");
    expect(getOrdinalNumber("11")).toBe("11th");
    expect(getOrdinalNumber("12")).toBe("12th");
    expect(getOrdinalNumber("13")).toBe("13th");
}); 

});