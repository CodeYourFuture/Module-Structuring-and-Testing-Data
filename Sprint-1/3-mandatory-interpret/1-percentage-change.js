let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*    
a) There are 5 calls made:
    carPrice = Number(carPrice.replaceAll(",", ""));
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""))
b) Error on line 5 for "," it is missing the seperating , between "," and "".
c) 4 and 5
d) 1 and 2, 7 and 8,
e) It removes the , from the string and replaces it with nothing. Used to help change the string into a number with the "Number" function.
*/