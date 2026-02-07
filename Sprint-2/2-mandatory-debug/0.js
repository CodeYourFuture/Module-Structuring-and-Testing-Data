//  =============> Prediction <=============
// The code will not throw an error -- it's syntactically fine. However, the
// multiply function is missing a return call, so it will return undefined
// by default. The function therefore simply prints the result of the
// multiplication instead of actually returning it as a value.

//  =============> Actual Results <=============
// 320
// The result of multiplying 10 and 32 is undefined

//  =============> Explanation <=============
// The 320 is printed in the terminal because of the console.log(). Because
// no return was written, the default undefined is generated.

//  =============> Corrected Script <=============
function multiply(a, b) {
  return a * b;
}

const actualResult = multiply(10, 32);
const expectedResult = 320;

console.assert(
  actualResult === expectedResult,
  `actual result: ${actualResult}, expected result: ${expectedResult}`
);
