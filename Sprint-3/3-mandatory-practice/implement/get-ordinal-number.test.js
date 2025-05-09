const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

//Dear mentor, could you please answer my question on line 94 if you know the answer? Thank you!

//CHECKING NUMBERS ENDING IN 1
// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });


// Case 2: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

// Case 3: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    });


    //CHECKING NUMBERS ENDING IN 2
// Case 4: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// Case 5: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"
test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
    });

// Case 6: Identify the ordinal number for 222
// When the number is 222,
// Then the function should return "222nd"
test("should return '222nd' for 222", () => {
    expect(getOrdinalNumber(222)).toEqual("222nd");
    });


    //CHECKING NUMBERS ENDING IN 3
// Case 7: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    });

// Case 8: Identify the ordinal number for 13
// When the number is 13,
// Then the function should return "13th"
test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
    });

// Case 9: Identify the ordinal number for 33
// When the number is 33,
// Then the function should return "33rd"
test("should return '33rd' for 33", () => {
    expect(getOrdinalNumber(33)).toEqual("33rd");
    });

//CHECKING NUMBERS ENDING IN ANYOTHER NUMBER
// Case 10: Identify the ordinal number for 0
// When the number is 0,
// Then the function should return "0th"
test("should return '0th' for 0", () => {
    expect(getOrdinalNumber(0)).toEqual("0th");
    });

// Case 11: Identify the ordinal number for 4
// When the number is 4,
// Then the function should return "4th"
test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    });

    //Letstake the last test as an example:
//     test("should return '4th' for 4", () => {
//         expect(getOrdinalNumber(4)).toEqual("4th");
//         });
// In test function we pass two values, the first one is the error message if the test fails-"should return '4th' for 4"- and the second one is anonymous function which contains the actual test code- () => {expect(getOrdinalNumber(4)).toEqual("4th");}). The return value of the anonymous function is boolean value which is true if the test passes and false if the test fails. Can we rewrite test function as follow?
// test("should return '4th' for 4", getOrdinalNumber(4) === "4th");
// test("Error Message", boolean value)
// I tried it and it says the second argument should be a function. Logically the function is returning a boolean value, so it should work using comparison between the actual result and expected values passed to getOrdinalNumber. But it doesn't:) . Why is that? Could you please explain it to me? Thank you!