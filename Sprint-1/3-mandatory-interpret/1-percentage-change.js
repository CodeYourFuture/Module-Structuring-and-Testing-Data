let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
        /*  There are 2 functions called which are 'Number' and '.replaceAll'
            carPrice = Number(carPrice.replaceAll(",", ""));
            priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
        */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        // There was a missing comma in line 5 inside the parentheses of the '.replaceAll()' function and we fix it by adding it.

// c) Identify all the lines that are variable reassignment statements
        /*  let carPrice = "10,000";
            let priceAfterOneYear = "8,543";
        */

// d) Identify all the lines that are variable declarations
        /*  const priceDifference = carPrice - priceAfterOneYear;
            const percentageChange = (priceDifference / carPrice) * 100;
        */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
        /*  The expression  Number(carPrice.replaceAll(",","")) is taking value of the carPrice variable,
            and replacing the commas by space then convert this value to be numbers.
        */
