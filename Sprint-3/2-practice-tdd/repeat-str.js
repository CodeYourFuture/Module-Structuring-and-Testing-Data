/**
 *
function repeatStr() {
  return "hellohellohello";
}

module.exports = repeatStr;
*
*/

// repeat-str.js

function repeatStr(str, count) {
  // Convert count to a number
  const numCount = Number(count);
  
  // Check if count is a valid number
  if (isNaN(numCount)) {
    throw new Error("Count must be a number");
  }
  
  // Check for negative count
  if (numCount < 0) {
    throw new Error("Count must be a positive integer");
  }
  
  // Handle count of 0
  if (numCount === 0) {
    return "";
  }
  
  // Floor the count to handle decimal numbers
  const repeatTimes = Math.floor(numCount);
  let result = "";
  
  // Build the repeated string
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
  }
  
  return result;
}

module.exports = repeatStr;
