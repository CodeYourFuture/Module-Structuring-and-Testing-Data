// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); // convert hours to number
  const min = Number(time.slice(3)); // convert minutes to number
  
  if (hours > 24 || min > 59 || (hours === 24 && min > 0)) {
    return "Invalid time"; // to handle invalid input
  }

  if (hours === 24 && min === 0) {
    return "12:00 am";  // to handle special case for 24:00 - Midnight
  }
  
  if (hours === 0) {
    return `12:${min.toString().padStart(2, "0")} am`; // to handle midnight case (00:00)
  }

  if (hours === 12) {
    return `12:${min.toString().padStart(2, "0")} pm`; // to handle noon case (12:00)
  }

  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")} pm`; // to handle pm cases
  }

  return `${hours.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} am`; // to handle am cases
} 



function myAssert(inputTime, expectedOutput) {
  const actualOutput = formatAs12HourClock(inputTime);
  if (actualOutput !== expectedOutput) {
    throw new Error(`Assertion Failed: Expected "${expectedOutput}", but got "${actualOutput}"`);
  } else {
    console.log(`Test Passed for ${inputTime}`);
  }
}

myAssert("01:23", "01:23 am");  

myAssert("23:00", "11:00 pm");  
console.log(formatAs12HourClock("23:15"));