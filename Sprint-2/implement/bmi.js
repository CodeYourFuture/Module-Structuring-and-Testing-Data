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

________________________________________SOLUTION_________________________________________

// Implementation:

/**
 * Calculates the Body Mass Index (BMI) given weight in kg and height in meters.
 *
 * @param {number} weight - The weight of the person in kilograms.
 * @param {number} height - The height of the person in meters.
 * @returns {number} The BMI value rounded to 1 decimal place.
 */
function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
      throw new Error("Height and weight must be positive values.");
    }
  
    // Step 1: Square the height
    const heightSquared = height ** 2;
  
    // Step 2: Divide weight by the squared height
    const bmi = weight / heightSquared;
  
    // Step 3: Round to 1 decimal place
    return parseFloat(bmi.toFixed(1));
  }
  
  // Example usage:
  console.log(calculateBMI(70, 1.73)); // Output: 23.4

  
  // Explanation:  
  /* 
Input Validation:

The function checks if height or weight are non-positive values (e.g., zero or negative). If so, an error is thrown.
BMI Calculation:

Square the height: height ** 2 computes the height squared.
Divide weight by squared height: This gives the BMI value.
Rounding:

The toFixed(1) method ensures the BMI is rounded to 1 decimal place.
parseFloat converts the string result of toFixed back to a number.
*/

//  Here are some test cases to validate the implementation:

console.log(calculateBMI(70, 1.73)); // Output: 23.4
console.log(calculateBMI(50, 1.60)); // Output: 19.5
console.log(calculateBMI(90, 1.75)); // Output: 29.4
console.log(calculateBMI(100, 2.00)); // Output: 25.0

//  Invalid inputs:    

console.log(calculateBMI(0, 1.73)); // Error: Height and weight must be positive values.
console.log(calculateBMI(70, 0));  // Error: Height and weight must be positive values.

//  high or low values to ensure accuracy: 

console.log(calculateBMI(200, 1.5)); // Output: 88.9
console.log(calculateBMI(30, 2.5));  // Output: 4.8

// Comment: This implementation is efficient, robust, and meets the requirement of returning the BMI rounded to one decimal place.
