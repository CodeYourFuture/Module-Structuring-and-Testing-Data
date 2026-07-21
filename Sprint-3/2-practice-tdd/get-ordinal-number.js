//function getOrdinalNumber(num) {
  //return "1st";
//}

//module.exports = getOrdinalNumber;
// this is a code i came up with to get the ordinal number of a given number. 
// I will now write tests to check if it works correctly.

//function getOrdinalNumber(n) {
  //const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
  //const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
  //const rule = pr.select(n);
  //return `${n}${suffixes[rule]}`;
//}

// code without any API

function getOrdinalNumber(n) {
  // Pure arithmetic to get absolute value without Math.abs()
  let positiveN;
if (n < 0) {
  positiveN = -n;
} else {
  positiveN = n;
}
  
  const lastTwoDigits = positiveN % 100;
  const lastDigit = positiveN % 10;

  // Teens exception: 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${n}th`;
  }

  // Standard endings
  if (lastDigit === 1) return `${n}st`;
  if (lastDigit === 2) return `${n}nd`;
  if (lastDigit === 3) return `${n}rd`;

  return `${n}th`;
}

module.exports = getOrdinalNumber;
