// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
function wholeNumberPart(inputNumber) {
    return Math.trunc(inputNumber);
}

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
function decimalPart(inputNumber) {
    decimalPartStr = "0." + inputNumber.toString().split('.')[1];
    return parseFloat(decimalPartStr);
}

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
function roundedNum(inputNumber) {
    return Math.ceil(inputNumber);
}

// Log your variables to the console to check your answers
const num = 56.5678;
console.log(`wholeNumberPart from ${num} = ${wholeNumberPart(num)}`);
console.log(`decimalPart from ${num} = ${decimalPart(num)}`);
console.log(`roundedNum from ${num} = ${roundedNum(num)}`);

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
