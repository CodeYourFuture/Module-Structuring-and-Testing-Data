const validateNumber = require("./card-validator")
const isValidNumber=require("./card-validator")


test("should return true if the number is 16 digits long",()=>{
    expect(validateNumber(1029384756820562)).toEqual(true)
})
test("should return false if the number is less than 16 digits", () => {
  expect(validateNumber(10293847568202)).toEqual(false);
});
test("should return false if the number is more than 16 digits long", () => {
  expect(validateNumber(1029384756820512348)).toEqual(false);
});



test("all digits must be numbers",()=>{
    expect(validateNumber(1036294650361848)).toEqual(true)
})
test("all digits must be numbers", () => {
  expect(validateNumber("103629465036184a")).toEqual(false);
});



test("all the digits can not be the same",()=>{
    expect(validateNumber(3636363636363636)).toEqual(true)
})
test("all the digits can not be the same", () => {
  expect(validateNumber(3333333333333336)).toEqual(true);
});
test("all the digits can not be the same", () => {
  expect(validateNumber(2222222222222222)).toEqual(false);
});


test("the final digit must be even",()=>{
    expect(validateNumber(1528056378293456)).toEqual(true)
})
test("the final digit must be even", () => {
  expect(validateNumber(1528056378293457)).toEqual(false);
});


test("the sum of all digits must be greater than 16",()=>{
    expect(validateNumber(1903647295628592)).toEqual(true)
})
test("the sum of all digits must be greater than 16", () => {
  expect(validateNumber(1000100000000002)).toEqual(false);
});