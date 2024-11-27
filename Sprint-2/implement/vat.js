// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

// Function to calculate price with VAT added
function addVAT(price) {
    const vatInclusivePrice = price * 1.2; // Multiply by 1.2 to add 20% VAT
    return vatInclusivePrice; // Return the new price with VAT
  }
  
  // Test cases
  console.log(addVAT(50));  // Expected output: 60 (50 + 20% VAT)
  console.log(addVAT(100)); // Expected output: 120 (100 + 20% VAT)
  console.log(addVAT(25));  // Expected output: 30 (25 + 20% VAT)
  console.log(addVAT(75));  // Expected output: 90 (75 + 20% VAT)
  console.log(addVAT(10));  // Expected output: 12 (10 + 20% VAT)
  