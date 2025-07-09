const cardValidator = require("./card-validator");

// For example, the following credit card numbers are valid:
// 9999777788880000
// 6666666666661666

// And the following credit card numbers are invalid:
// a92332119c011112 (invalid characters)
test("a92332119c011112 should return false", () => {
  const myNum = "a92332119c011112";
  const mybool = false;
  const count = cardValidator(myNum);
  expect(count).toEqual(mybool);
});

// 4444444444444444 (only one type of number)
test("4444444444444444 should return false", () => {
  const myNum = "4444444444444444";
  const mybool = false;
  const count = cardValidator(myNum);
  expect(count).toEqual(mybool);
});

// 1111111111111110 (sum less than 16)
test("1111111111111110 should return false", () => {
  const myNum = "1111111111111110";
  const mybool = false;
  const count = cardValidator(myNum);
  expect(count).toEqual(mybool);
});
// 6666666666666661 (odd final number)TextDecoderStream();
test("6666666666666661 should return false", () => {
  const myNum = "6666666666666661";
  const mybool = false;
  const count = cardValidator(myNum);
  expect(count).toEqual(mybool);
});
