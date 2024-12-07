// Predict and explain first...

// Why will an error occur when this program runs?
    //  There will be an error becuase the arguement is being declared as a constant variable inside of the functions. The console.log() does not call the function, it is trying to log the arguement which it doesn't have access to because of scope..

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) { // decimalNumber is shown as an argument
  // const decimalNumber = 0.5;    // decimalNumber is then declared as a constant variable
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); // unable to log variable becuase of scope.
