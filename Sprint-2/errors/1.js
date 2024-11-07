// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.08));

//Inside the function decimalNumber is both a parameter and redefined as a constant using const
//thats why we get SyntaxError, JavaScript doesn't allow a patrameter to be declaredwithin the same scope!

//Second: console.log(decimalNumber) is outside the function, where decimalNumber is not defined.
//This causes a RefernceError because decimalNumber is only accessible within the function scope!
