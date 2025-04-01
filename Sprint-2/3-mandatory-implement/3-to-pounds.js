// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs



function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi.toFixed(1); // rounds to 1 decimal place and returns as a string
  }
  console.log(calculateBMI(70, 1.73)); // Output: "23.4"
  
  