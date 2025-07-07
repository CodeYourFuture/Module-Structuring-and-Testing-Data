// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minuteNum = Number(time.slice(3));
  const minuteStr = String(minuteNum).padStart(2, "0");

  if (hours > 12) {
    return `${hours - 12}:${minuteStr} pm`;
  } else if (hours === 0) {
    if (minuteNum === 0) {
      return "12:00 am";
    } else {
      return `12:${minuteStr} am`;
    }
  } else if (hours === 12) {
    return `${hours}:${minuteStr} pm`;
  }

  return `${String(hours).padStart(2, "0")}:${minuteStr} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("13:45"));
console.log(formatAs12HourClock("00:59"));
console.log(formatAs12HourClock("12:20"));
console.log(formatAs12HourClock("00:01"));
console.log(formatAs12HourClock("09:06"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("23:59"));
/* 
In the original code, when the input was "00:00", it returned "00:00 am", which is incorrect. 
To fix this, I added an else if condition to specifically handle this case and return "12:00 am" instead.
I added a condition to check if the hour is 0 and the minute is more than 0, because in 12-hour time format, 
'00:59' should be displayed as '12:59 am', not '00:59 am'
I used the padStart method to ensure that  minute values are always displayed with two digits.
For example, '12:09' instead of '12:9'.
*/
