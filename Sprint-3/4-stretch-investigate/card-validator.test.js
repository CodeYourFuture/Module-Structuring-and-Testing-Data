const isCardValid = require("./card-validator");

test("card number has 16 characters.", () => {
    expect(isCardValid('9999777788880000')).toEqual(true);
    expect(isCardValid('999977778888000')).toEqual(false);
});

test("card number must have at least two different digits represented (all of the digits cannot be the same).", () => {
    expect(isCardValid('4444444444444444')).toEqual(false);
    expect(isCardValid('4449444444444494')).toEqual(true);
});

test("card number must not contain invalid characters.", () => {
    expect(isCardValid('a92332119c011112')).toEqual(false);
    expect(isCardValid('-123456789012340')).toEqual(false);
    expect(isCardValid('1.23456789012340')).toEqual(false);
    expect(isCardValid('+123456789012346')).toEqual(false);
    expect(isCardValid('12345678901234e0')).toEqual(false);
    expect(isCardValid('9999999999999998')).toEqual(true);
    expect(isCardValid('9399774788880010')).toEqual(true);
});

test("the sum of all the digits must be greater than 16.", () => {
    expect(isCardValid('1111111111111110')).toEqual(false);
    expect(isCardValid('5000011111111200')).toEqual(false);
    expect(isCardValid('5000011111111206')).toEqual(true);
});

test("The final digit must not be odd.", () => {
    expect(isCardValid('6666666666666661')).toEqual(false);
    expect(isCardValid('6666666666666662')).toEqual(true);
});