function calculateBMI(weight, height) {
  // Square the height (height in meters)
  const heightSquared = height * height;

  // Divide weight by height squared to get BMI
  const bmi = weight / heightSquared;

  // Return the BMI rounded to 1 decimal place
  return bmi.toFixed(1); // toFixed returns a string, which is fine unless you need it as a number
}

// Example usage:
console.log(calculateBMI(70, 1.73)); // Output: "23.4"
