// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

//Answer:
function calculatePriceWithVAT(price) {
    const priceWithVAT = price * 1.2 ;
    return priceWithVAT ;
}
console.log(calculatePriceWithVAT(50));
console.log(calculatePriceWithVAT(80));
console.log(calculatePriceWithVAT(10));

/*I have improved my function according the mentor's feedback.

// Function to calculate the price with VAT added
// Now allows the user to input a custom VAT rate, instead of a fixed 20%

function calculatePriceWithVAT(price, vatRate = 0.2) {
    // Validate if price is a positive number by checking it directly
    if (price <= 0 || price !== price) {  // price !== price is a simple way to check if it's NaN
        return 'Invalid price'; // Return error message for invalid price
    }

    // Calculate the price with the custom VAT rate (default is 20%)
    const priceWithVAT = price * (1 + vatRate); // Apply the custom VAT rate
    return priceWithVAT;
}

// Test cases with the default VAT of 20% and custom VAT rates
console.log(calculatePriceWithVAT(50)); // Default VAT 20% => 60
console.log(calculatePriceWithVAT(80)); // Default VAT 20% => 96
console.log(calculatePriceWithVAT(10)); // Default VAT 20% => 12

// Custom VAT rates
console.log(calculatePriceWithVAT(50, 0.15)); // Custom VAT 15% => 57.5
console.log(calculatePriceWithVAT(100, 0.25)); // Custom VAT 25% => 125
console.log(calculatePriceWithVAT(200, 0.18)); // Custom VAT 18% => 236*/
