// Predict and explain first...
// I predict that the code will output 'undefined' because the function calculateBMI 
// does not return any value yet.

// The function calculateBMI currently has no return statement, so it will return 'undefined'.
// To fix this, we need to perform the BMI calculation: 
// BMI = weight / (height * height)
// Then, we round the result to one decimal place using toFixed(1).

// Finally, correct the code to fix the problem
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(1);
}

module.exports = calculateBMI;

// Example:
console.log(`The BMI of someone who weighs 70kg and is 1.73m tall is ${calculateBMI(70, 1.73)}`);
// Output: The BMI of someone who weighs 70kg and is 1.73m tall is 23.4
