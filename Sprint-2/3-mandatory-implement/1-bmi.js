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
  const bmi = weight / (height * height);
  return bmi.toFixed(1);
  // return the BMI of someone based off their weight and height with the integer type
}
console.log(`Your BMI is ${calculateBMI(68, 1.6)}`);
//Output : Your BMI is 26.6

//Explanation :
//Initially I wrote this code as below and got output
// function calculateBMI(weight, height) {
//     return weight / (height * height);
//         }
//I got the BMI calculation right and got the output : 26.562499999999996
//But I still needed the decimal place to be limited to 1. So I looked up mdn for toFixed method and applied that to the code
//The new code with toFixed method has given me the output I wanted
