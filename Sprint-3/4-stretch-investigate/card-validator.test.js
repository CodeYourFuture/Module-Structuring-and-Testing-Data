const isCardValid = require("./card-validator");

test("card number has 16 characters.", () => {
    expect(isCardValid('9999777788880000')).toEqual(true);
    expect(isCardValid('999977778888000')).toEqual(false);
});

test("card number must have at least two different digits represented (all of the digits cannot be the same).", () => {
    expect(isCardValid('a92332119c011112')).toEqual(false);
});

test("card number must not contain invalid characters.", () => {
    expect(isCardValid('4444444444444444')).toEqual(false);
});

test("the sum of all the digits must be greater than 16.", () => {
    expect(isCardValid('1111111111111110')).toEqual(false);
});

test("The final digit must not be odd.", () => {
    expect(isCardValid('6666666666666661')).toEqual(false);
});