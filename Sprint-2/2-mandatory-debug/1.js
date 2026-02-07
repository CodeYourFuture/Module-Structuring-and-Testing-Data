//  =============> Prediction <=============
// The script will run but not as intended. The sum function has a valid
// return, though it is simply null. Since a + b calculation comes after
// the return, it isn't run as the program exits the loop once the return
// call has been made. I therefore expect the following to be printed on
// the terminal:
// The sum of 10 and 32 is undefined

//  =============> Actual Results <=============
// The sum of 10 and 32 is undefined

//  =============> Explanation <=============
// The return was made before a and b could be added.

//  =============> Corrected Script <=============

function sum(a, b) {
  return a + b;
}

const actualResult = sum(10, 32);
const expectedResult = 42;

console.assert(
  actualResult === expectedResult,
  `actual result: ${actualResult}, expected result: ${expectedResult}`
);
