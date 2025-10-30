let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Line 4 contains two function calls: replaceAll(",", "") & Number(...)
// Line 5 also contains two function calls: replaceAll(",","") & Number(...)
// Line 10 contains one function call: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// The error originates from line 5: SyntaxError: missing ) after argument list. According to MDN Web Docs, this occurs when there is a problem with how a function is called - typically caused by a typo, a missing separator (such as a comma), or an incorrectly formatted string within the argument list

// c) Identify all the lines that are variable reassignment statements
// Line 4: Reassignment (not a declaration)
// Line 5: Reassignment (not a declaration)

// d) Identify all the lines that are variable declarations
// Line 1: Variable declaration using 'let'
// Line 2: Variable declaration using 'let'
// Line 7: Variable declaration using 'const'
// Line 8: Variable declaration using 'const'

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* The expression Number(carPrice.replaceAll(",","")) first uses the String.prototype.replaceAll() method to remove all commas from the string stored in carPrice
It then passes the resulting string to the Number() function, which converts it into a numeric value. According to MDN, replaceALL() returns a new string with all occurrences of a 
specified substring replaced, and Number() converts its argument to a number or return NaN if the conversion fails */