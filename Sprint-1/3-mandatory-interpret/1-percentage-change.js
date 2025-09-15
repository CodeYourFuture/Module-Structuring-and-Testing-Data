let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // There are 4 function calls in this file
    // Line 4: carPrice.replaceAll(",", "")
    // Line 4: Number(carPrice.replaceAll(",", ""))
    // Line 5: priceAfterOneYear.replaceAll("," "")
    // Line 5: Number(priceAfterOneYear.replaceAll("," ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

    // The error is coming from line 5
    // The error is due to a missing comma
    // Add a comma between the two quotations

// c) Identify all the lines that are variable reassignment statements

    // Line 4 and Line 5

// d) Identify all the lines that are variable declarations

    // Line 1, Line 2, Line 7 and Line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    // The expression is replacing all the commas in the string carPrice with nothing, and then converting it to a number type