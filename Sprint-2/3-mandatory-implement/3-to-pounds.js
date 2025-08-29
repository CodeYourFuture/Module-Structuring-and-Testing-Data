function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

// Test calls
console.log(toPounds("399p"));   // Output: £3.99
console.log(toPounds("5p"));     // Output: £0.05
console.log(toPounds("45p"));    // Output: £0.45
console.log(toPounds("999p"));   // Output: £9.99
console.log(toPounds("2p"));     // Output: £0.02
