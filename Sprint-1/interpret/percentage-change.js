let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // There are 3 function calls
    // Line 4 function replaceAll()
    // Line 5 function replaceAll()
    // Line 12 function log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // The error is on line 5
    // The error is happening because there is no comma to separate the two arguements
    // I can fix the error by adding a comma after the first closing quotation mark

// c) Identify all the lines that are variable reassignment statements
    // Lines - 4, 5

// d) Identify all the lines that are variable declarations
    // Lines - 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // The expression is replacing the comma in the digits with an empty space, and the Number() function is converting the string to numerical value
    // The purpose is to take a formatted price string (with commas) and turn it into a usable number.
