function getOrdinalNumber(num) {
  // check if the input is not a number, not an integer, or if it's negative
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    throw new Error("Invalid input: number must be a non-negative integer");
  }

if (num % 100 >= 11 && num % 100 <= 13) {  // check for numbers ending with 11, 12, or 13
    return num + "th";
  } else if (num % 10 === 1) {  // check for numbers ending with 1 (but not 11)
    return num + "st";
  } else if (num % 10 === 2) {  // check for numbers ending with 2 (but not 12)
    return num + "nd";
  } else if (num % 10 === 3) {  // check for numbers ending with 3 (but not 13)
    return num + "rd";
  }
  // For all other numbers, append "th"
  return num + "th";
}

module.exports = getOrdinalNumber;
