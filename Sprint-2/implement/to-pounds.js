// Function to convert weight from kilograms to pounds
function toPounds(weightInKilograms) {
    // Conversion factor: 1 kilogram = 2.20462 pounds
    const pounds = weightInKilograms * 2.20462;
  
    // Return the result (weight in pounds)
    return pounds;
  }
  
  // Test cases: Call the function with different inputs
  
  // Test case 1: Convert 50 kilograms to pounds
  const weight1 = 50;
  console.log(`Weight in pounds for ${weight1} kg: ${toPounds(weight1)}`);  // Expected: 110.231 pounds
  
  // Test case 2: Convert 70 kilograms to pounds
  const weight2 = 70;
  console.log(`Weight in pounds for ${weight2} kg: ${toPounds(weight2)}`);  // Expected: 154.324 pounds
  
  // Test case 3: Convert 100 kilograms to pounds
  const weight3 = 100;
  console.log(`Weight in pounds for ${weight3} kg: ${toPounds(weight3)}`);  // Expected: 220.462 pounds
  
  // Test case 4: Convert 0 kilograms to pounds (edge case)
  const weight4 = 0;
  console.log(`Weight in pounds for ${weight4} kg: ${toPounds(weight4)}`);  // Expected: 0 pounds
  
  // Test case 5: Convert 1.5 kilograms to pounds (edge case)
  const weight5 = 1.5;
  console.log(`Weight in pounds for ${weight5} kg: ${toPounds(weight5)}`);  // Expected: 3.307 pounds