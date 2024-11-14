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


function ibmCalculator() {
    const weight = 150;           
    const height = 170 / 100; //tranforme centimeter to meter

    const calculateIBM = weight / Math.pow(height, 2); 
    const result = calculateIBM.toFixed(1);       //chang for decimal 

    return result;
}

console.log(`Your Body Mass Index (BMI) is ${ibmCalculator()}`);

//gisdellabella@Giss-MBP implement % node bmi.js
//Your Body Mass Index (BMI) is 19.9
//Your Body Mass Index (BMI) is 20.7
//Your Body Mass Index (BMI) is 12.8
//Your Body Mass Index (BMI) is 51.9


