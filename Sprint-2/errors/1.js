// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

//console.log(percentage);
console.log(`${convertToPercentage(0.5)}`);
//In line 6,syntax error: Identifier 'str' has already been declared: we can't use the same variable name both as a function's argument
//and as a variable inside the function. I'm not going the variable name in this project as it seems line 7 is a useless line
//so I just put // to ignore this line

//In line 13, we can't use that syntax, as percentage is a variable inside the convertToPercentage() function and can't be
//used outside of that function, so I've used line 14 instead
