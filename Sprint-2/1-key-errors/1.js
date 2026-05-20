// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict that there will be two errors in this code.
// The first error will be that the const decimalNumber  
// has already been declared in the function parameter,
// it cannot be declared twice, which will cause an error because
// it is not allowed to redeclare a variable with the same name.
// The 2nd error is that console.log(decimalNumber) is trying
// to log a variable that is outside the function, which will cause
// an error because it is not defined.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage; 
}

console.log(convertToPercentage(0.1)); // This will log "10%"
// console.log(decimalNumber); // This will cause an error because decimalNumber is not defined outside the function 


// =============> write your explanation here
// decimalNumber is already a parameter so it can't be declared again
// with const inside the function. Also, variables declared inside a
// function are not accessible outside the function (scope), so 
// console.log(decimalNumber) out the function would fail.
// the fix is to remove the const declaration and to log the percentage
// instead of decimalNumber, which is the variable that holds the result
// of the calculation (convertToPercentage(0.5)).

// Finally, correct the code to fix the problem


// =============> write your new code here
