let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //1. Line 5: carPrice.replaceAll(",", "")
    //2. Line 6: priceAfterOneYear.replaceAll(",", "")
    //3. Line 8: console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //The error is in line 5, the error is occurring because there was a comma missing here; ("," "").

// c) Identify all the lines that are variable reassignment statements
    //carPrice = Number(carPrice.replaceAll(",", ""));
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// d) Identify all the lines that are variable declarations
    //let carPrice = "10,000";
    //let priceAfterOneYear = "8,543";
    //const priceDifference = carPrice - priceAfterOneYear;
    //const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //The expression is converting the string representation of the car price to a number by first removing the comma.

    //Purpose: 
    //To allow the computer identify the value of the car price as a number so that it can be used in calculations.