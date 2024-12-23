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
function calc(weigh,height){
    const bmi = weigh/(height * height);
   return parseFloat(bmi.toFixed(1))
 }
console.log(calc(70, 1.73)); // Expected: 23.4 (from example)
console.log(calc(50, 1.6));  // Expected: 19.5 (Normal weight)
console.log(calc(90, 1.75)); // Expected: 29.4 (Overweight)
console.log(calc(120, 1.8)); // Expected: 37.0 (Obese)
console.log(calc(45, 1.5));  // Expected: 20.0 (Normal weight)
console.log(calc(0, 1.7));   // Expected: 0.0 (Edge case: no weight)
console.log(calc(70, 0));    // Expected: Infinity (Edge case: invalid height)
console.log(calc(70, 1.73).toString()); // Expected: '23.4' (to ensure numeric type compatibility)

