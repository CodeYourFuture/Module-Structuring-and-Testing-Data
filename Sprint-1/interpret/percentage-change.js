let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Answer: I think 3 function call are in this file.

    //carPrice.replaceAll(",", "")
    //priceAfterOneYear.replaceAll(",", "")
    // Number(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   
    // answer: The error was coming from line 5, replaceAll(). i fixed it by adding coma in between 

// c) Identify all the lines that are variable reassignment statements

    // answer: 2 Variable reassignments 
    // carPrice = Number(carPrice.replaceAll(",", ""));
    // priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); 

// d) Identify all the lines that are variable declarations

    //answer: There are 4 variable declarations
    //let carPrice = "10,000";
    //let priceAfterOneYear = "8,543";
    //const priceDifference = carPrice - priceAfterOneYear;
    //const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
   
    // answer: carPrice.replaceAll(",", ""): This part replaces all occurrences of commas in the string carPrice (e.g., "10,000") with an empty string, resulting in "10000".
    // Number(...): The Number function converts the string "10000" to the number 10000.
