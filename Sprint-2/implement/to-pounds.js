// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// ============================= code from Sprint-1 ===============================


const penceString = "399";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"

);


console.log(`£${pounds}.${pence}`);

// ================= Converted as reusable block of code  ========================

function convertPenceToPound1(priceAmount) {
  const numberwithoutpence = priceAmount.substring(0, priceAmount.length - 1);
  const paddedPenceNumberString = numberwithoutpence.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

priceAmount = "999p"

console.log(convertPenceToPound1(priceAmount));


// ==================== function handling decimal inputs  ========================

money = "0.23p";

function convertPenceToPounds(money) {
  const cleanInput = money.substring(0, money.length - 1);

  if (cleanInput.includes(".")) {
    const [pounds, pence] = cleanInput.split("."); //destructuring;
    const formattedPence = pence.padEnd(2, "0");
    return `£${pounds}.${formattedPence}`;
  } else {
    // Handle the integer case (e.g., "399p")
    const paddedPenceNumberString = cleanInput.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");

    return `£${pounds}.${pence}`;
  }
}

console.log(convertPenceToPounds(money));    // "£0.23"
console.log(convertPenceToPounds("399p"));   // "£3.99"
console.log(convertPenceToPounds("3.99p"));  // "£3.99"
console.log(convertPenceToPounds("50p"));    // "£0.50"
console.log(convertPenceToPounds("65p"));    // £0.65
console.log(convertPenceToPounds("0.3p"));   // "£0.30"