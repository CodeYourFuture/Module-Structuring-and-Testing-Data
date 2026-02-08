let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//      both use a call to read the string as a number and to replaceAll the comas with a null value


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//      the error is on line 5 there should be a coma after the "," to make the change

// c) Identify all the lines that are variable reassignment statements
//      lines 5 and 6 reassign the variables from the string to a number so that we can do a calculation on it 

// d) Identify all the lines that are variable declarations
//      lines 1, 2, 7 and 8 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//      it is changing the string "10,000" to a number and removing the comma so it can be used in the calculation
