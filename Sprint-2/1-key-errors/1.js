// Predict and explain first...
//Will cause a conflict and a SyntaxError because the variable in being declared twice.
// Why will an error occur when this program runs?
// The erros occurs because decimalNumber is declared twice in the same scope: once as a parameter of the function and again inside the function.

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
const decimalNumber = 0.5;
const percentage = ${decimalNumber * 100}%;

return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
const percentage = `${decimalNumber * 100}%`;
return percentage;
}

console.log(convertToPercentage(0.5));