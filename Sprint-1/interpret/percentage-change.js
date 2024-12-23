let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));

priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are five function calls in the file.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error in  line 6, the replace call function takes tow prameter there is no comma,to fix  you should add a comma between the arguments

// c) Identify all the lines that are variable reassignment statements
//  line 4 and 6

// d) Identify all the lines that are variable declarations
//  line 1, 2, 8 and 9

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//    firsly its will remove the comma and convert the result to a number /the purpose is to get a number insted of str
