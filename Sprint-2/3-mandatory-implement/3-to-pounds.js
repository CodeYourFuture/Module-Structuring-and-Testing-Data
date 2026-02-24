// In Sprint-1, there is a program written in interpret/to-pounds.js
// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

function toPounds(pence) {
  // 1. Divide pence by 100 to get pounds (نقسم على 100)
  const pounds = pence / 100;

  // 2. Return the formatted string with a £ sign and 2 decimal places (إرجاع النص مع علامة الجنيه وخانتين عشريتين)
  return `£${pounds.toFixed(2)}`;
}

// You should call this function a number of times to check it works for different inputs
// === Let's test the function ===

console.log(toPounds(150)); // Should print: £1.50
console.log(toPounds(2500)); // Should print: £25.00
console.log(toPounds(99)); // Should print: £0.99
console.log(toPounds(5)); // Should print: £0.05
