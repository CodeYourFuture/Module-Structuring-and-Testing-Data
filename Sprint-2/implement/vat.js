// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

function calculatePriceWithVAT(price) {
    // Multiply the price by 1.2 to include VAT
    const priceWithVAT = price * 1.2;
  
    // Return the result rounded to 2 decimal places
    return +priceWithVAT.toFixed(2);
  }
  
  // Example usage
  console.log(calculatePriceWithVAT(50)); // Expected: 60.00
  console.log(calculatePriceWithVAT(100)); // Expected: 120.00
  console.log(calculatePriceWithVAT(0));   // Expected: 0.00
  console.log(calculatePriceWithVAT(19.99)); // Expected: 23.99
  