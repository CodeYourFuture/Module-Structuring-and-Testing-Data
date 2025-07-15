// Define a function that converts kilograms to pounds
function toPounds(kg) {
  const pounds = kg * 2.20462;
  return pounds.toFixed(2); // rounds to 2 decimal places
}

// Call the function with different inputs to test it
console.log(toPounds(1));     // 2.20
console.log(toPounds(5));     // 11.02
console.log(toPounds(70));    // 154.32
console.log(toPounds(0));     // 0.00
