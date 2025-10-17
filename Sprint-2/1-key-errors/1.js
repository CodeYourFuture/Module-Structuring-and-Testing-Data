// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;=
}

console.log(decimalNumber);

// =============> write your explanation here

Answer:

The number (0.5) goes into the function — that’s our decimalNumber.

We use that decimalNumber to make a percent.

We don’t write const decimalNumber again because we already have it.

We return the answer (like "50%").

Then we call the function with 0.5 and print what it gives back.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;
  
  return percentage;

}

console.log(convertToPercentage(0.5));

