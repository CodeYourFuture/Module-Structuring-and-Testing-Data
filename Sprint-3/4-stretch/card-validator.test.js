const validateNumber = require("./card-validator")
const isValidNumber=require("./card-validator")


test("number should be 16 digits long",()=>{
    expect(validateNumber(1029384756820563)).toEqual(true)
})
test("number should be 16 digits long", () => {
  expect(validateNumber(10293847568205)).toEqual(false);
});
test("number should be 16 digits long", () => {
  expect(validateNumber(1029384756820512345)).toEqual(false);
});