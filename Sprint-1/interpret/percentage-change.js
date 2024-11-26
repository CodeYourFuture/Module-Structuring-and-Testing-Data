let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* Three. 
    1. Number
    2. replaceAll
    3. console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* a "," missing in fifth line, should be:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); */


// c) Identify all the lines that are variable reassignment statements
/*  1. carPrice
    2. priceAfterOneYear


// d) Identify all the lines that are variable declarations
/*  1. carPrice
    2. priceAfterOneYear
    3. priceDifference
    4. percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* carPrice.replaceAll(",", "") removed comma from carPrice

The overall purpose of the expression Number(carPrice.replaceAll(",", "")) is to:
  1. Clean up the string representation of the car price by removing any commas that are commonly used in formatting large numbers.
  2. Convert the cleaned string into a numeric type so that mathematical operations (like addition, subtraction, or percentage calculations) can be performed accurately.