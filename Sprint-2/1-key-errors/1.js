// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here: potential error, decimalNumber has already been declared, can't redaclare it again with a new variable in the same scope.
//another error could be, console.log will try to access a local variable from the global scope. 

// Try playing computer with the example to work out what is going on

// step one: function convertToPercentage(decimalNumber)
// function created with a parameter named (decimalNumber)
// step two: const decimalNumber = 0.5;
// error occurs because decimalNumber has been declared already in the fucntion, cannot declare another one with the same name , in the same scope. 
// program stops.
// we have fixed the first error. Code runs again.
// step three:  const percentage = `${decimalNumber * 100}%`;
// new variable called percentage created, then the JS code is inserted, where decimalNumber is multiplied by 100.
// no errors here
// step four:  return percentage;
// this line sends the value out of the function then stops the function. No errors so far. 
// Step five: console.log(decimalNumber);
// error occurs again, because the value created in step four can't be stored in console.log, due to decimalNumber being a parameter inside the function. Outside the function
// there is no variable named decimalNumber.
// we have fixed console.log with (convertToPercentage(0.5), now the result will print properly.



//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here: my error predictions turned out to be true and i have played computer with js code to further illustrate my reasoning. 

// Finally, correct the code to fix the problem
// =============> write your new code here:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

