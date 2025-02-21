const validateCardNumber = require ("./creditCardValidator");

//check card number is fulfill all condition and return true
test("valid card number should return true", ()=> {
    expect(validateCardNumber("4992739871600008")).toEqual(true);
});

// check card number is less than 16 digit return false
test("card number with less then 16 digits should return false", ()=> {
    expect(validateCardNumber("123456789012345")).toEqual(false);
});

//check card number is more then 16 digit return false
test("card number with more then 16 digits should return false", ()=> {
    expect(validateCardNumber("12345678901234567")).toEqual(false);
});

//check if any non numeric digit present in card number return false
test("card number with non-numeric character should return false", ()=> {
    expect(validateCardNumber("4992739aa160000a")).toEqual(false);
});

// if card number have all same digit return false
test("card number where all digit should be same should return false ", ()=> {
    expect(validateCardNumber("1111111111111111")).toEqual(false);
});

// if card number last digit is odd
test("card number with odd last digit should return false ", ()=> {
    expect(validateCardNumber("1234566543217765")).toEqual(false);
});