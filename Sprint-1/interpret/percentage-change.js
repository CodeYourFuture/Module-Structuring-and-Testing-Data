let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

 console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// On line 4 and 5 two functions are called: Number() and replaceAll() and then on line 10 the console.log function is called.


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// The error came from line 5. The error occurred because the replaceAll() function takes two arguments/parameters and there wasn't a comma to separate the two arguments, thus the error.


// c) Identify all the lines that are variable reassignment statements

// Line 4 and 5 are reassignment statements: the amounts reassigned without a comma

// d) Identify all the lines that are variable declarations

// Line 1, 2, 6 and 7 are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// First the Number() constructor creates a number object and when called it returns primitive values of type Number. In this case it's there to make sure that the method replaceAll(), which is a method of string values that returns a new string with all matches of a pattern replaced by a replacement(a comma in this instance), returns a number value.
