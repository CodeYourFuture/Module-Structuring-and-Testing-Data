function getOrdinalNumber(num) {
  if (arguments.length !== 1) {
    throw new Error("Function requires exactly one argument");
  }
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Input must be a number");
  }
  if (!Number.isFinite(num)){
    throw new Error("Input must be a finite number");
  }
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  
  
  switch (num % 100) {
    case 11:
    case 12:
    case 13:
      return num + "th";
      break;
  }
  switch (num % 10) {
    case 1:
      return num + "st";
      break;
    case 2:
      return num + "nd";
      break;
    case 3:
      return num + "rd";
      break;
    default:
      return num + "th";
      break;
  }
}

module.exports = getOrdinalNumber;
