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

// Answer:

// BMI is calculated as weight divided by height squared:
// BMI = weight / (height * height)

// First, we create a variable to store the BMI value:
const bmi = weight / (height * height);

// To format the result to 1 decimal place, we use the .toFixed(1) method.
// This converts the number to a string rounded to one decimal place:
// bmi.toFixed(1)

// Since .toFixed() returns a string, we convert it back to a number
// using parseFloat so we can use the result in further arithmetic operations.

// We can define the function as follows:

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(1));
}

// What we will enter:
function calculateBMI(70, 1.73) {
    const bmi = 70 / (1.73 * 1.73);
    return parseFloat(bmi.toFixed(1));
}
console.log(`The BMI for a weight of 70kg and height of 1.73m is ${calculateBMI(70, 1.73)}`);

// The results: 

// The BMI for a weight of 70kg and height of 1.73m is 23.4


//    Weight = 70 kg, height = 1.73 m.
//    	•	BMI = 70 ÷ (1.73 × 1.73) = 70 ÷ 2.9929 ≈ 23.41
//    	•	Rounded to 1 decimal = 23.4
//    	•	The function returns 23.4

