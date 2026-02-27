let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file. The lines where a function call is made are:
// Line 1: carPrice.replaceAll(",", "")
// Line 2: priceAfterOneYear.replaceAll(",", "")
// Line 3: Number(carPrice.replaceAll(",", ""))
// Line 4: Number(priceAfterOneYear.replaceAll(",", ""))
// Line 5: console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring in line 5, because it's missing a comma between the two arguments of the replaceAll method. 
// to fix this problem, we can add a comma between the two arguments: priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// there are 2 variable reassignment statements in this file. The lines where a variable reassignment is made are:
// Line 4 and 5 where we are reassigning new values to the variables 
// carPrice and priceAfterOneYear after converting them to numbers and removing the commas.

// d) Identify all the lines that are variable declarations
// there are 4 variable declarations in this file. The lines where a variable declaration is made are:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 6: const priceDifference = carPrice - priceAfterOneYear;
// Line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// To remove the commas from the string carPrice and convert the resulting string to a number. 
// Then, the Number function is used to convert the resulting string into a number data type,
//  which can be used for mathematical operations.