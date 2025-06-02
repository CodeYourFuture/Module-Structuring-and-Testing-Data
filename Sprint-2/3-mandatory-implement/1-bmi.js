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
    if(typeof weight !== 'number' || typeof height !== 'number' ){
        return 'Error: Weight and height must be numbers';
    } 
    
    if(weight <= 0 || height <= 0){
        return 'Error: Weight and height must be greater than zero';
    }
      const bmi = weight / (height * height);
        return parseFloat(bmi.toFixed(1));

}
console.log(`BMI for 50kg and 1.60m is: ${calculateBMI(50, 1.6)}`);  
console.log(`BMI for 90kg and 1.80m is: ${calculateBMI(90, 1.8)}`); 
console.log(`BMI for 0kg and 1.80m is: ${calculateBMI(0, 1.8)}`);  
console.log(`BMI for twelve kg and 0m is: ${calculateBMI("twelve", 0)}`)
console.log(`BMI for 100kg and thirty m is: ${calculateBMI(100,"thirty")}`)
