let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //carPrice = Number(carPrice.replaceAll(",", "")); functions:number()|replaceall()
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));functions: number()|replaceall()
    //console.log(`The percentage change is ${percentageChange}`);functions:console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //the correct syntax of function replaceall() is: replaceall("",""), which in this case "," is missing

// c) Identify all the lines that are variable reassignment statements
    //carPrice = Number(carPrice.replaceAll(",", ""));
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));


// d) Identify all the lines that are variable declarations
    //let carPrice = "10,000";
    //let priceAfterOneYear = "8,543";
    //const priceDifference = carPrice - priceAfterOneYear;
    //const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //it removes "," from between the carprice string and then converts the string to the number to be used in operations
