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

function extract1decimal(x){
    return Math.floor(x*10)/10
}

function bmi(height, weight){
    if (height === 0) {
        return Error;
    }
    let bmivalue = weight/(height*height)
    return extract1decimal(bmivalue)
}

console.log(bmi(1.97, 97), 24.9)
console.log(bmi(1.90, 90))
console.log(bmi(1.88, 90))  //25.46401086
console.log(bmi(1.73, 70))  // Our result is more accurate. We didn't round the height*height number.