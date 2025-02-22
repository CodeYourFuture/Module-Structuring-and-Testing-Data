const validateCard = require("./card-validator");

test ("should validate any given card number", ()=>{
    const errorText =
      "INVALID CARD NUMBER! must be 16 digits number, with at least two different digits represented, final digit must be even, sum of all the digits must be greater than 16.";
    expect(validateCard(1111111111111111)).toEqual(errorText);
    expect(validateCard(6754438898954431)).toEqual(errorText);
    expect(validateCard("456gghb76509ggh6")).toEqual(errorText);
    expect(validateCard("2345676543234562")).toEqual("Correct card number");
})
