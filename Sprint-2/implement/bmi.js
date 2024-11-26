// Function to calculate the Body Mass Index (BMI)
function calculateBMI(weight, height) {
    // Step 1: Square the height (height * height)
    const heightSquared = height * height; // height * height gives us the squared height
    
    // Step 2: Divide the weight by the squared height (weight / heightSquared)
    const bmi = weight / heightSquared; // This formula calculates BMI: weight (kg) / height² (m²)
    
    // Step 3: Round the result to 1 decimal place and return it
    return bmi.toFixed(1);  // toFixed(1) rounds the result to 1 decimal place, as required
  }
  
  // Example usage of the function:
  const weight = 70;  // Weight in kilograms
  const height = 1.73;  // Height in meters
  
  // Calling the function with the weight and height
  const bmi = calculateBMI(weight, height);
  
  // Output the BMI result to the console
  console.log(`The BMI is: ${bmi}`);  // Expected Output: The BMI is: 23.4
  
  // Additional example test cases:
  
  // Example 1: BMI calculation for weight = 70kg, height = 1.80m
  const bmi1 = calculateBMI(70, 1.80);  // Expected: 21.6
  console.log(`Example 1 BMI: ${bmi1}`);
  
  // Example 2: BMI calculation for weight = 85kg, height = 1.75m
  const bmi2 = calculateBMI(85, 1.75);  // Expected: 27.7
  console.log(`Example 2 BMI: ${bmi2}`);
  
  // Example 3: BMI calculation for weight = 50kg, height = 1.60m
  const bmi3 = calculateBMI(50, 1.60);  // Expected: 19.5
  console.log(`Example 3 BMI: ${bmi3}`);
  