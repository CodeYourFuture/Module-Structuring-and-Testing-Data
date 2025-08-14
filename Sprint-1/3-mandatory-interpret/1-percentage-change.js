let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*
    There are 3 function calls
    carPrice = Number(carPrice.replaceAll(",", ""));
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
    console.log(`The percentage change is ${percentageChange}`);
*/


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/*
    The error is on line 5 because replaceAll needs a comma between arguments.
    The error can be fixed by adding a comma.
    The code should look like this: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/


// c) Identify all the lines that are variable reassignment statements

/*
    carPrice = Number(carPrice.replaceAll(",", ""));
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/ 


// d) Identify all the lines that are variable declarations

/*
    let carPrice = "10,000";
    let priceAfterOneYear = "8,543";
    const priceDifference = carPrice - priceAfterOneYear;
    const percentageChange = (priceDifference / carPrice) * 100;
*/


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// It removes commas from a string and converts it into a number
