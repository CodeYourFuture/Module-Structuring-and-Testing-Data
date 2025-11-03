// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
    // return the BMI of someone based off their weight and height
}

// Predict and explain first...
//  =============> write your prediction here
// I predict that the code will output 'undefined' because the function calculateBMI 
// does not return any value yet.

// =============> write your explanation here
// The function calculateBMI currently has no return statement, so it will return 'undefined'.
// To fix this, we need to perform the BMI calculation: 
// BMI = weight / (height * height)
// Then, we round the result to one decimal place using toFixed(1).

// Finally, correct the code to fix the problem
//  =============> write your new code here

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(1);
}

// Example:
console.log(`The BMI of someone who weighs 70kg and is 1.73m tall is ${calculateBMI(70, 1.73)}`);
// Output: The BMI of someone who weighs 70kg and is 1.73m tall is 23.4
