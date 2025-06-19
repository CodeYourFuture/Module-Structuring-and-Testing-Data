const validator = require("./card-validator.js");


// || TESTS

let cardNum = "";


// || Testing that invalid card numbers are rejected 

// Number must be 16 digits
test("number must be 16 digits exactly", () => {
    cardNum = "00000000000000"; //this is 14 zeros
    expect(validator(cardNum)).toEqual(false);
})

// All digits must be numbers
test("all digits must be numbers", () => {
    cardNum = "ab00000000000000";
    expect(validator(cardNum)).toEqual(false);
})

// Number must contain at least two different digits (all digits can't be the same)
test("card number must contain at least two unique digits", () => {
    cardNum = "0000000000000000"; //this is 16 zeros
    expect(validator(cardNum)).toEqual(false);
})

// The final digit must be even
test("final digit of cardNum must be even", () => {
    cardNum = "1000000000000003";
    expect(validator(cardNum)).toEqual(false);
})

// The sum of all the digits must be greater than 16
test("sum of all digits in cardNum should be >16", () => {
    cardNum = "1000000000000004";
    expect(validator(cardNum)).toEqual(false);
})


// Testing that a valid card number is accepted 

// A valid card number should return true
test("a valid card number", () => {
    cardNum = "123456789123458";
    expect(validator(cardNum)).toEqual(true);
})