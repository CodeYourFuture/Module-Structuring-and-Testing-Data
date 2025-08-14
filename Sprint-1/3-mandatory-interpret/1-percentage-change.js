let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*there are 5 function in the above code and we can find them in 
- line 4: Number(carPrice.replaceAll(",", "")
- line 5: Number(priceAfterOneYear.replaceAll("," "")
- line 10:console.log(`The percentage change is ${percentageChange}`) *\

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* line 5:  priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
                                                                    ^^^
SyntaxError: missing ) after argument list *\

// this error happens because of a coma. a replace() needs two argument separated by a comma to work but here ("," "") there is no comma and it confuses js because it thinks i am opening a string and not closing it properly.
// so to fix my code i need to make two argument "what to replace" & "what to replace it with" so to replace "8,543" with "8543" which is basically to remove the comma from the middle of the numbers-
// like i said earlier this two arguments needs to separate by a comma like this (",","") which is telling it to change "," to "".
// c) Identify all the lines that are variable reassignment statements

/* line 4 and line 5 
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));*\



// d) Identify all the lines that are variable declarations
/* Line 1,2,7 and 8 basically any line with let and const  *\

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/* carPrice.replaceAll(",","") this will replace "," with this "" which is removing the comma so in our code "10,000" will be replaced by "10000"
this is because we cant do math with a string with a comma so we need to remove the comma before doing the math. so after removing the comma from 
the string we left with Number(), this function will convert the string into number so that we can do our math. 
IN SUMMARY
Number("10,000") will actually return NaN (Not a Number)
 *\
