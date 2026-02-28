let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
there are 4 function calls in this File, they are in the following lines:
line 1: carPrice.replaceAll(",", "")
line 2: priceAfterOneYear.replaceAll(",", "")
line 3: Number(carPrice.replaceAll(",", ""))
line 4: Number(priceAfterOneYear.replaceAll(",", ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements
there are 4 variables reassignment statements in this file, in the following lines:
line 1 = carPrice =
line 2 = priceAfterOneYear =
line 3 = carPrice = Number(carPrice.replaceAll(",", ""))
line 4 = priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""))




// d) Identify all the lines that are variable declarations
there are 2 variable declarations in this file , in :
line 1 : let carPrice = 
line 2 : let priceFterOneYear =


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

the expression `Number(carPrice.replaceAll(",", ""))` is doing the following:
1. `carPrice.replaceAll(",", "")` removes all commas from the string value of `carPrice`.
2. `Number(...)` converts the resulting string (which no longer contains commas) into a number.

This is necessary because the original `carPrice` variable is a string with commas (e.g., "10,000"), and JavaScript cannot perform mathematical operations on strings with commas.
 The purpose of this expression is to convert the formatted price string into a numeric value that can be used in calculations.