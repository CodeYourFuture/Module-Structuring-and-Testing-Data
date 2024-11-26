// Function to calculate the price with 20% VAT added
function calculatePriceWithVAT(price) {
    // Step 1: Multiply the original price by 1.2 to include the VAT (20%)
    const priceWithVAT = price * 1.2;
    
    // Step 2: Return the new price with VAT added
    return priceWithVAT;
  }
  
  // Example usage:
  
  // Test case 1: Calculate VAT-inclusive price for £50
  const price1 = 50;
  console.log(`Price with VAT for £${price1}: £${calculatePriceWithVAT(price1)}`);  // Expected: £60
  
  // Test case 2: Calculate VAT-inclusive price for £100
  const price2 = 100;
  console.log(`Price with VAT for £${price2}: £${calculatePriceWithVAT(price2)}`);  // Expected: £120
  
  // Test case 3: Calculate VAT-inclusive price for £75
  const price3 = 75;
  console.log(`Price with VAT for £${price3}: £${calculatePriceWithVAT(price3)}`);  // Expected: £90
  
  // Test case 4: Calculate VAT-inclusive price for £25
  const price4 = 25;
  console.log(`Price with VAT for £${price4}: £${calculatePriceWithVAT(price4)}`);  // Expected: £30