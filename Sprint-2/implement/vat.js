// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on
________________________________________SOLUTION__________________________________

/**
 * Calculates the price with 20% VAT added.
 *
 * @param {number} price - The original price before VAT.
 * @returns {number} The price with VAT included.
 */
function addVAT(price) {
    if (typeof price !== "number" || price < 0) {
      throw new Error("Price must be a non-negative number.");
    }
  
    const VAT_RATE = 1.2; // 20% VAT means multiplying the price by 1.2
    return parseFloat((price * VAT_RATE).toFixed(2)); // Ensure result is rounded to 2 decimal places
  }
  
  // Example usage:
  console.log(addVAT(50));  // Output: 60.00
  console.log(addVAT(100)); // Output: 120.00
  console.log(addVAT(0));   // Output: 0.00

//               Explanation:
/*
Input Validation:

Ensures that the input price is a non-negative number.
Throws an error if the input is invalid.
VAT Calculation:

The constant VAT_RATE is set to 1.2, representing the 20% VAT.
The price is multiplied by VAT_RATE to calculate the new price with VAT.
Formatting:

toFixed(2) ensures the result is rounded to two decimal places for currency formatting.
parseFloat converts the result back to a number.
*/

// Test cases:   

// Valid inputs
console.log(addVAT(50));   // Output: 60.00
console.log(addVAT(99.99)); // Output: 119.99
console.log(addVAT(0));    // Output: 0.00
console.log(addVAT(19.5)); // Output: 23.40

// Invalid inputs
try {
  console.log(addVAT(-10)); // Throws an error: "Price must be a non-negative number."
} catch (error) {
  console.error(error.message);
}

try {
  console.log(addVAT("50")); // Throws an error: "Price must be a non-negative number."
} catch (error) {
  console.error(error.message);
}
