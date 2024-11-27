// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on
function calculateVAT(productPrice) {
  return `${productPrice *1.2}`;
}
const priceWithVat = calculateVAT(89);
console.log (`£${priceWithVat}`);