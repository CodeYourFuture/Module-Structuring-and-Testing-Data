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

function bodyMassIndex (weight, height){           // defining two parameters (weight and height)
   let BMI = weight/Math.pow(height,2);            // calculating BMI : Squaring height with Math.pow and then dividing wight by the height square
   return BMI.toFixed(1);                          // returning BMI with 1 decimal place by toFixed method
}

console.log(bodyMassIndex(70, 1.73));  // OUTPUT : 23.4