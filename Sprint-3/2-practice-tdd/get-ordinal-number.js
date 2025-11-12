function getOrdinalNumber(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error("Only positive integers are allowed");
  }
  // Handle Exception of 11, 12, 13
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  // Handle general last-digit cases
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}


module.exports = getOrdinalNumber;

// Function implemented 
