let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are 5 function calls, 2x (lines 4 and 5), 1x (line 10)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?


// Error: SyntaxError: missing ) after argument list   (Line 5)
// The arguments in the replaceAll function need to be comma separated, the difference can be seen from line 4 where the code
// did not hit an error, adding in that comma will solve the error

// c) Identify all the lines that are variable reassignment statements

// Lines 4 and 5

// d) Identify all the lines that are variable declarations

// Lines 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// It looks like the function is removing the commas (by replacing them with nothing) from the string 
// so there are only numbers left and then converting it into a Number data type

console.log(carPrice)

// I commented out the line of code with an error and ran the code to confirm, it returned 10000
// I can check it is a number by running a math operation on it

console.log(carPrice*2)

// result as expected