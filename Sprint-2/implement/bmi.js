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

// ============================= BMI TEST ===============================

function bodyMassIndex(weight, height) {
  const kilograms = Number(weight);
  const metres = Number(height);

  if (kilograms > 0 && metres > 0) {
    const bmi = kilograms / metres ** 2;
    return Math.round(bmi * 10) / 10;
  }
   return "Invalid input. Please enter valid weight and height.";
}

//Avoid .toFixed() if we need a number (as .toFixed() returns a string).
console.log(bodyMassIndex(70, 0)); 


/*
    Dynamic Precision with Math.round()
    Combining Math.pow() with Math.round() offers a dynamic solution for those
    seeking a more flexible approach that can adapt to rounding to various decimal 
    places.

    function roundTo(num, precision) {
    const factor = Math.pow(10, precision)
    return Math.round(num * factor) / factor
    }
    console.log(roundTo(4.687, 0)); // Output: 5
    console.log(roundTo(4.687, 1)); //one decimal place
    console.log(roundTo(4.687, 2)); //two decimal places
    console.log(roundTo(4.687, 3)); // Output: 4.687

*/
