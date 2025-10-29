let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made 

// lines 4,5,7,8
// the following 4 lines are functions as they are manipulating the data.
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// line 5
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); the error is a missing comma between the two arguments in the .replaceAll() function call. Without the comma,
// the two string arguments "," and "" are not separated, so the computer reads them together as one argument.

// c) Identify all the lines that are variable reassignment statements

// lines 4,5
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));


// d) Identify all the lines that are variable declarations

// lines 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It replace the "," with "" which means omitting the "," and add nothing so we have whole number form that computer can work with it.
