// Below are the steps for how BMI is calculated

const { createTestScheduler } = require("jest");

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
    const bmi = weight / (height * height);
    const value= bmi.toFixed(1);

    let category;
    if (value < 18.5) category = "Underweight";
    else if (value < 25) category = "Healthy";
    else if (value < 30) category = "Overweight";
    else catergory = "Please get in touch with your doctor";

    return { value, category };
}

//testing testing 1 2
// console.log(`My BMI is ${calculateBMI(65.8, 1.69)}`); //DV
// console.log(`My BMI is ${calculateBMI(58.0, 1.73)}`); //TMKC
// console.log(`My BMI is ${calculateBMI(22.5, 1.22)}`); // SV
const tests = [
    { w: 65.8, h: 1.69 }, //DV
    { w: 58.0, h: 1.73 }, // TMKC
    { w: 22.5, h: 1.22 } // SV according to the calc our kids underweight but the chubbiest of us all
];

tests.forEach(({w, h}) => {
    const { value, category } = calculateBMI(w, h);
    console.log( `BMI ${value}, category: ${category}`);
});