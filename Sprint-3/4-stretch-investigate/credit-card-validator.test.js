const cardValidator = require("./credit-card-validator")

/**
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
9999777788880000 true
6666666666661666 true
 */

test("(invalid characters)", () => {expect(cardValidator('a92332119c011112')).toEqual(false);});
test("(only one type of number)", () => {expect(cardValidator(4444444444444444)).toEqual(false);});
test("(sum less than 16)", () => {expect(cardValidator(1111111111111110)).toEqual(false);});
test("(odd final number)", () => {expect(cardValidator(6666666666666661)).toEqual(false);});
test("valid number '9999777788880000' ", () => {expect(cardValidator(9999777788880000)).toEqual(true);});
test("valid number '6666666666661666' ", () => {expect(cardValidator(6666666666661666)).toEqual(true);});

