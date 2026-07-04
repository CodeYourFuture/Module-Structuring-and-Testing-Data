let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// a) Function calls:
//    Line 4: replaceAll(",", "") and Number(...)
//    Line 5: replaceAll(",", "") and Number(...)
//    Line 10: console.log(...)

// b) The error on line 5 is a missing comma between the two arguments to replaceAll:
//    replaceAll("," "") should be replaceAll(",", ""). Fixed above.

// c) Variable reassignment statements: lines 4 and 5 (carPrice = ..., priceAfterOneYear = ...)

// d) Variable declarations: lines 1, 2 (let), lines 7, 8 (const)

// e) Number(carPrice.replaceAll(",","")) first removes all commas from the string "10,000"
//    turning it into "10000", then converts that string into the number 10000.
//    This is necessary because you cannot do arithmetic on strings.
