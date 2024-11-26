function calculateBMI(weight, height) {
  // Validate inputs
  if (typeof weight !== 'number' || typeof height !== 'number') {
    throw new Error("Both weight and height must be numbers.");
  }
  if (weight <= 0) {
    throw new Error("Weight must be a positive number.");
  }
  if (height <= 0 || height >= 3) {
    throw new Error("Height must be a positive number, typically in meters (e.g., 1.73).");
  }

  // Calculate BMI
  const bmi = weight / (height * height);
  
  return bmi.toFixed(1);
}

// Examples
console.log(calculateBMI(70, 1.73)); // Output: 23.4
console.log(calculateBMI(-70, 1.73)); // Throws an error: Weight must be a positive number.
console.log(calculateBMI(70, 185)); // Throws an error: Height must be in meters.
console.log(calculateBMI(70, '1.73')); // Throws an error: Both weight and height must be numbers.

