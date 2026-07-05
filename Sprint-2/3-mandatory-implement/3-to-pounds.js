function toPounds(penceString) {
  const withoutP = penceString.substring(0, penceString.length - 1);
  const padded = withoutP.padStart(3, "0");
  const pounds = padded.substring(0, padded.length - 2);
  const pence = padded.substring(padded.length - 2).padEnd(2, "0");
  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));  // £3.99
console.log(toPounds("9p"));    // £0.09
console.log(toPounds("50p"));   // £0.50
console.log(toPounds("1000p")); // £10.00
