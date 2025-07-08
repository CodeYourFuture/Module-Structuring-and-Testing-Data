function getOrdinalNumber(num) {

  const numAsStr = num.toString();
  const lastDigit = numAsStr.slice(-1);
  
  if (lastDigit === "1") { 
    if (num % 100 === 11) {     
        // % 100 basically 'removes' any digits that aren't in the integer or tens places, e.g. 15611 % 100 = 11, or: the remainder of 15611/100 is 11.
      return num + "th";    // numbers ending in 11 get a different suffix
    }
    return num + "st";  //numbers ending in 1 otherwise get st
  }
  
  if (lastDigit === "2") {
    if (num % 100 === 12) {
      return num + "th";        // numbers ending in 12 get a different suffix 
    }
    return num + "nd";
  }
  
  if (lastDigit === "3") {
    if (num % 100 === 13) {
      return num + "th";
    }
    return num + "rd";
  }
  
  // Everything else just ends in th
  return num + "th";

}


module.exports = getOrdinalNumber;