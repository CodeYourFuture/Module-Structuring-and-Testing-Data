let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/* I will consider the methods of objects as functions, 
based on this, 5 (five) functions were called in this script:
1. line 4: Number
2. line 4: replaceAll
3. line 5: Number
4. line 5: replaceAll
5  line 10: log
 */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/* line 5:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
                                                        ^^^

Missing `,` separator between method parameters. 
Need to insert it to fix the error
 */

// c) Identify all the lines that are variable reassignment statements

/* line 4: carPrice
line 5: priceAfterOneYear
 */

// d) Identify all the lines that are variable declarations

/* line 1: carPrice
line 2: priceAfterOneYear
line 7: priceDifference
line 8: percentageChange
 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/* First, in the carPrice variable of type string, 
we remove all the characters `,`, 
then we convert the resulting string into a number */