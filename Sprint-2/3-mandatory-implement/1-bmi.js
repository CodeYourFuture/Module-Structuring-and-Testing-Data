// Below are the steps for how BMI is calculated 
// Accepts two parameters: weight (in kilograms) and height (in metres)
// Returns the BMI to 1 decimal place

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.
// Formula: BMI = weight / (height * height)

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall:
// Step 1: height squared = 1.73 * 1.73 = 2.9929
// Step 2: BMI = 70 / 2.9929 = 23.39
// Step 3: Rounded to 1 decimal place = 23.4

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

function calculateBMI(weight, height) {
  const bmi = weight / (height * height); 
  return Number(bmi.toFixed(1)); 
}

// Example test cases
console.log(calculateBMI(70, 1.73)); // Expected: 23.4
console.log(calculateBMI(80, 1.8));  // Expected: 24.7
console.log(calculateBMI(50, 1.6));  // Expected: 19.5

/*

Explanation:

Weight = 70 kg, height = 1.73 m.
  • BMI = 70 ÷ (1.73 × 1.73) = 70 ÷ 2.9929 ≈ 23.41
  • Rounded to 1 decimal = 23.4
  • The function returns 23.4

// Given someone's weight in kg and height in metres.
// When we call this function with the weight and height.
// It should return their Body Mass Index to 1 decimal place.

*/
