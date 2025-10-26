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

// I have made a small change to the test cases to ensure they match the expected output to 1 decimal place
   function calculateBMI(weight, height) {
  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  const bmi = weight / (height * height);

  // Round to 1 decimal place and return
  return Number(bmi.toFixed(1));
}

// Test cases
console.log(calculateBMI(85, 1.54)); // 35.8
console.log(calculateBMI(60, 1.65)); // 22.0
console.log(calculateBMI(72, 1.80)); // 22.2
// now the function is reusable and correct.
console.log(typeof calculateBMI(85, 1.54));