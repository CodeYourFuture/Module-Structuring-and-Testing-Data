let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 5 function calls in total:
// on lines: 4 (2), 5 (2) and 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// line 5. it says it's a syntax error, and it identifies a missing closing parenthesis as the issue, but the reason it thought that is that it expected the function to close after the comma, since there was no comma outside of the quotation marks. to fix this, I just added a comma between the two arguments in the .replaceAll() function.

// c) Identify all the lines that are variable reassignment statements

//these would be the line 4 and 5

// d) Identify all the lines that are variable declarations

//these would be the ones starting with let or const:
//lines 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//in the carPrice variable we want to replace all instances of commas with nothing - so we want to remove the thousand separators. The result is then passed in to the Number() function to convert this string to a number. 
