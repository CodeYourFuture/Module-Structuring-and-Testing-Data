//  =============> Prediction <=============
// The script will run but not as intended. Each time the getLastDigit
// function is ran, it will return "3". This is because it's using the
// global variable num

//  =============> Actual Results <=============
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

//  =============> Explanation <=============
// The getLastDigit is using the global num variable instead of an
// input variable

//  =============> Corrected Script <=============
function getLastDigit(num) {
  return num.toString().slice(-1);
}

const actualResult_1 = getLastDigit(42);
const actualResult_2 = getLastDigit(105);
const actualResult_3 = getLastDigit(806);

const expectedResult_1 = "2";
const expectedResult_2 = "5";
const expectedResult_3 = "6";

console.assert(
  actualResult_1 === expectedResult_1,
  `actual result: ${actualResult_1}, expected result: ${expectedResult_1}`
);

console.assert(
  actualResult_2 === expectedResult_2,
  `actual result: ${actualResult_2}, expected result: ${expectedResult_2}`
);

console.assert(
  actualResult_3 === expectedResult_3,
  `actual result: ${actualResult_3}, expected result: ${expectedResult_3}`
);
