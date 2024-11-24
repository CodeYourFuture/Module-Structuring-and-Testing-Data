// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
/*   const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
 */
  const hoursMinutes = time.split(":").map(str => str.padStart(2, "0"));
  // getting the number of hours
  let hours = Number(hoursMinutes[0]);
  // getting the am or pm from the number of hours
  const amPM = (hours < 12 || (hours === 12 && hoursMinutes[1] === "00")) ? " am" : " pm";
  // getting from 24-hours to 12-hours
  hours -= (hours > 12) ? 12 : 0;
  // converting 24-hours to 12-hours full format
  return hours.toString().padStart(2, "0") + ":" + hoursMinutes[1] + amPM;
}

// Check normal format without minutes
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

// Check normal format without minutes
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// my testing block

/* I hope I have checked all possible options 
for the error to occur when converting time 
from 24-hour format to 12-hour format
*/

// Check normal format with minutes
let currentTestOutput = formatAs12HourClock("05:45");
let targetTestOutput = "05:45 am";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check abnormal format when one digital of hours and minutes
currentTestOutput = formatAs12HourClock("1:0");
targetTestOutput = "01:00 am";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check abnormal format when one digital of minutes
currentTestOutput = formatAs12HourClock("15:5");
targetTestOutput = "03:05 pm";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check normal format when 12:00 in 24 hours format
currentTestOutput = formatAs12HourClock("12:00");
targetTestOutput = "12:00 am";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check normal format when 12:01 and more in 24 hours format
currentTestOutput = formatAs12HourClock("12:01");
targetTestOutput = "12:01 pm";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check normal format when 24:00 in 24 hours format
currentTestOutput = formatAs12HourClock("24:00");
targetTestOutput = "12:00 pm";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check normal format when 00:00 in 24 hours format
currentTestOutput = formatAs12HourClock("00:00");
targetTestOutput = "00:00 am";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

// Check normal format when 00:01 and more in 24 hours format
currentTestOutput = formatAs12HourClock("00:01");
targetTestOutput = "00:01 am";
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);


