//  =============> Prediction <=============
// It will throw an error. This is because the variable num is being used without
// being declared previously.

//  =============> Actual Results <=============
// Error message: function square(3) {
//                ^
// SyntaxError: Unexpected number

//  =============> Explanation <=============
// An error was thrown because the because we cannot name a variable with a number
// as has been done in the function input

//  =============> Corrected Script <=============
function square(num) {
  return num * num;
}

console.assert(
  square(3) === 9,
  `actual result: ${square(3)}, expected result: 9`
);
