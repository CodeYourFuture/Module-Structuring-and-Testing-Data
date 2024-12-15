// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const {getOrdinalNumber} = require ('./get-ordinal-number');
describe("getOrdinalNumber function", () => {

//Error cases
test("Please enter a valid number", () => {
    expect(() =>getOrdinalNumber(null)).toThrow("Please enter a valid number"); //must have an entry
    expect(() =>getOrdinalNumber(undefined)).toThrow("Please enter a valid number"); //must be an entry
    expect(() =>getOrdinalNumber("-1")).toThrow("Please enter a valid number"); //handles for negative numbers
    expect(() =>getOrdinalNumber("0")).toThrow("Please enter a valid number"); //handles for zero

})   

//Typical cases
test("should return a string ending in 'st' if any number containing 1 except 11 is input", () => {
    expect(getOrdinalNumber("1")).toBe("1st");
    expect(getOrdinalNumber("21")).toBe("21st");
}); 

test("should return a string ending in 'nd' if any number containing 2 except 12 is input", () => {
    expect(getOrdinalNumber("2")).toBe("2nd");
    expect(getOrdinalNumber("22")).toBe("22nd");
}); 

test("should return a string ending in 'rd' if any number containing  except 13 is input", () => {
    expect(getOrdinalNumber("3")).toBe("3rd");
    expect(getOrdinalNumber("23")).toBe("23rd");
}); 

test("should return a string ending in 'th' if any number containing 2 except 12 is input or 11, 12 and 13 are input", () => {
    expect(getOrdinalNumber("4")).toBe("4th");
    expect(getOrdinalNumber("11")).toBe("11th");
    expect(getOrdinalNumber("12")).toBe("12th");
    expect(getOrdinalNumber("13")).toBe("13th");
}); 

});