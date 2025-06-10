let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// # there are 5 Function calls:
// # 1. carPrice.replaceAll()
// # 2. priceAfterOneYear.replaceAll()
// # 3. Number(carPrice.replaceAll())
// # 4. Number(priceAfterOneYear.replaceAll())(line 5)
// # 5. console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// # The error is coming from line 5, where the replaceAll function is called on priceAfterOneYear.
// # The error occurs because there is a missing comma in the replaceAll function call.
// # The error can be fixed by adding the missing comma in the replaceAll function call.
// # The corrected line should be:
// # priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// # There are 2 variable reassignment statements:
// # 1. carPrice = Number(carPrice.replaceAll(",", ""));(line 3)
// # 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));(line 4)

// d) Identify all the lines that are variable declarations
// # There are 2 variable declarations:
// # 1. let carPrice = "10,000";(line 1)
// # 2. let priceAfterOneYear = "8,543";(line 2)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// # The expression Number(carPrice.replaceAll(",", "")) is converting the string value of carPrice, which contains a comma, into a number.
// # The replaceAll function removes the comma from the string, and then the Number function converts the resulting string into a number.
// # The purpose of this expression is to ensure that the carPrice variable holds a numeric value that can be used for calculations, such as finding the percentage change in price.
