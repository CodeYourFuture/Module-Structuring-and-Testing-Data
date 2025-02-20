
const cardNumberValidator = require("./card-validator-solution")


// Scenario 1: When card number is not 16 digits
 //testing the length of the card number, more than 16 digit char test
test("Should return Invalid Card number if it is not 16 digits", () => {
    expect(cardNumberValidator("12345678901234567890")).toBe("Invalid card number");
});

// Testing the length of the card number, when less than 16 digits char test
("Should return Invalid Card number if it is not 16 digits", () => {
    expect(cardNumberValidator("123456789")).toBe("Invalid card number");
});


//Scenario 2: When card number has non-numeric character
// Testing non-numeric character
test("Should return false if it contains a non-numeric character", () => {
    expect(cardNumberValidator("123456789012345a")).toBe(false);
});


//Scenario 3: When sum of all digits is less than 17
//Testing sum of all digits
test("Should return false if the sum of all digits is less than 17", () => {
    expect(cardNumberValidator("1111111111111111")).toBe('The sum of the digits should be more than 17');
});

//Testing sum of all digits less than 17 when ending in even number, 0
test("Should return false if the sum of all digits is less than 17", () => {
expect(cardNumberValidator("1111111111111110")).toBe('The sum of the digits should be more than 17');
});


//Scenario 4: Card numbers ending with an odd number:
test("Should return false if the card number ends with an odd number", () => {
    expect(cardNumberValidator("1111111111111113")).toBe('The last digit should be even');
});


//Scenario 5: Card numbers with all digits the same
test("Should return false if the card number has all digits the same", () => {
    expect(cardNumberValidator("4444444444444444")).toBe('All digits should be different');
});
