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

function calculateBMI(weight, height){
    return `${(weight / (height * height)).toFixed(1)}`;
}

const bmi = calculateBMI(57, 1.69);
console.log(`Your BMI is ${bmi}`);

function showBMIrange(bodyIndex){
    if (bodyIndex <= 18.5){
        return `Underweight`;
    } else if (bodyIndex > 18.5 && bodyIndex <= 24.9) {
        return `Normal weight`;
    } else if (bodyIndex > 25 && bodyIndex <= 29.9) {
        return `Overweight`;
    } else {
        return `Obesity`;
    }
}

const bmiRange = showBMIrange(bmi);
console.log(`Your BMI range is ${bmiRange}`);
