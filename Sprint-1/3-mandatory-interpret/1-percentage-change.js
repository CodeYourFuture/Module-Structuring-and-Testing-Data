let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 2 function calls: Numbers(), variable.replaceAll().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//On Output and Problems Console tabs, it said on line 5, a comma was missing, after comparing with the upper line that has the same function, I added a comma to separate the arguments that were passed to the function.


// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5, because we are assigning a new value to the variables that are already declared in the previous line (1 and 2)

// d) Identify all the lines that are variable declarations
// line 1,2,7,8


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Number convert the current values ,in both variables declared in line 1 and 2, to number after removing comma from the values
