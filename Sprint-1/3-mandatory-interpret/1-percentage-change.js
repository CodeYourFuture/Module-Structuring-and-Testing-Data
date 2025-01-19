let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // There is 5 function calls:
    // 1. carPrice = Number(carPrice.replaceAll(",", ""));
    // 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    
    // 3. const priceDifference = carPrice - priceAfterOneYear;
    // 4. const percentageChange = (priceDifference / carPrice) * 100;
    
    // 5. console.log(`The percentage change is ${percentageChange}`);

    
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // In line 5, a comma is missing between the two parameters. after ".replaceall"
    
// c) Identify all the lines that are variable reassignment statements

    // carPrice = Number(carPrice.replaceAll(",", ""));
    // priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations

    // let carPrice = "10,000";
    // let priceAfterOneYear = "8,543";

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
