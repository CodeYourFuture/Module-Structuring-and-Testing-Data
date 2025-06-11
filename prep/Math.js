  const decimalNumber = 0.9;
const percentage = `${decimalNumber * 100}%`; 
console.log(`Percentage: ${percentage}`); // Output: Percentage: 50%
// This will convert a decimal number to a percentage and print it in the terminal  



const price = 340; // This is the price of an item
const poundToPenny = 100; // 1 pound = 100 pence
const priceInPounds = (price / poundToPenny).toFixed(2); // This will convert the price to pounds and format it to 2 decimal places 
console.log(`Price in Pounds: £${priceInPounds}`); // Output: Price in Pounds: £1.00



const height = 10; 
const width = 30;
const area = height * width; // This will calculate the area of a rectangle
const perimeter = 2 * (height + width); // This will calculate the perimeter of a rectangle
console.log(`Area: ${area}`); // Output: Area: 300
console.log(`Perimeter: ${perimeter}`); // Output: Perimeter: 80  


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
} // This function will convert a decimal number to a percentage
console.log(`Percentage: ${convertToPercentage()}`); 
// We could also remove the variable percentage, since we can return the value of the expression directly

const output1 = convertToPercentage(5.5);
const output2 = convertToPercentage(0.423)

console.log(output1); // Output: Percentage: 550%
console.log(output2); // Output: Percentage: 42.3%
// This will convert 5.5 to a percentage
const result = convertToPercentage(); // we can store the result of the function in a variable
console.log(result); // Output: Percentage: 50%