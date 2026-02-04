let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
        // There are 4 function calls.
        // In line 4: Number() and replaceAll() are function calls.
        // In line 5: Number() and replaceAll() are function calls.
        // Including console.log(), there are 5 function calls.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        // The syntax error was in line 5; a comma was missing

// c) Identify all the lines that are variable reassignment statements
        // Variable reassignment statements are in lines 4 and 5

// d) Identify all the lines that are variable declarations
        // 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
        // First, it removes the digit group separator. // "10,000" => "10000"
        // Then, the Number() method changes the string to a number. // "10000" => 10000
