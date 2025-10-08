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

// Here's my implementation of the BMI calculation function, according to the steps provided and my understanding:

function calculateBMI(weight, height) {
    // Calculate height squared
    const heightSquared = height * height;
    
    // Calculate BMI (weight divided by height squared)
    const bmi = weight / heightSquared;
    
    // Return BMI rounded to 1 decimal place
    return bmi.toFixed(1);
}

// Test with my values: weight = 70kg, height = 1.90m
const weight = 70;
const height = 1.90;
const bmiResult = calculateBMI(weight, height);

console.log(`For weight ${weight}kg and height ${height}m, the BMI is ${bmiResult}`);

// Calculation breakdown for your values:

// Height squared: 1.90 × 1.90 = 3.61
// BMI: 70 ÷ 3.61 = 19.39...
// Rounded to 1 decimal place: 19.4
// So the function will return "19.4" for weight = 70kg and height = 1.90m.
// The toFixed(1) method ensures the result is formatted to 1 decimal place as specified in the requirements.

