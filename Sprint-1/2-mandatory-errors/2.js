/*
  QUESTION:
  The following code fails to print "I was born in Bolton". What's the error?

  console.log(`I was born in ${cityOfBirth}`);
  const cityOfBirth = "Bolton";

  ANSWER:
  The error occurs because:
  1. We're trying to use 'cityOfBirth' before it's declared
  2. const/let variables can't be accessed before declaration (Temporal Dead Zone)

  SOLUTION:
  const cityOfBirth = "Bolton"; // Declare first
  console.log(`I was born in ${cityOfBirth}`); // Now works

  EXPLANATION:
  - Order matters in JavaScript for const/let variables
  - The fixed version follows proper variable declaration order
  - This avoids the Temporal Dead Zone reference error
  - Output will now correctly show: "I was born in Bolton"
*/

// Corrected implementation:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);