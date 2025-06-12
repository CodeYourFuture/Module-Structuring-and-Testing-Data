function getOrdinalNumber(n) {
  // handle invalid inputs such as non-numeric inputs
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0)
    throw new Error("Invalid ordinal number");
  /*
    There is a mathematical approach to determine the correct order suffix for ordinal numbers using modulo opertions. Most numbers follow a rule based on the lst digit, ie. if the last digit is 1, 2 or 3 use "st", "nd", "rd" respectively and for everything else use "th". The exception to the rule is for numbers ending in 11, 12, or 13, they always end in "th". For the last digit of a number use modulo 10 (e.g. 21 % 10 = 1, 102 % 10 = 2, etc), for the last two digits of a number use modulo 100 (e.g. 111 % 100 = 11, 11)
    */
  if (n % 100 === 11 || n % 100 === 12 || n % 100 === 13) {
    return n + "th";
  }
  if (n % 10 === 1) {
    return n + "st";
  }
  if (n % 10 === 2) {
    return n + "nd";
  }
  if (n % 10 === 3) {
    return n + "rd";
  }
  return n + "th"; //everything else in numbers
}

module.exports = getOrdinalNumber;
