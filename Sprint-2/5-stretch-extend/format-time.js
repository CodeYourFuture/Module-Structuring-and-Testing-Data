// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// My final version of the function that converts 24-hour time to 12-hour format
// It handles midnight (00:00), noon (12:00), and all edge cases correctly

// function formatAs12HourClock(time) {
// const hours = Number(time.slice(0, 2));
// if (hours > 12) {
// return `${hours - 12}:00 pm`;
// }
// return `${time} am`;
// }

function formatAs12HourClock(time) {
  const [hourStr, minute] = time.split(":");
  let hours = Number(hourStr);
  let period = "am";

  if (hours === 0) {
    hours = 12; // Midnight becomes 12
  } else if (hours === 12) {
    period = "pm"; // Noon stays 12 but changes to pm
  } else if (hours > 12) {
    hours = hours - 12;
    period = "pm"; // Any hour after 12 becomes pm
  }
    // Return the formatted time as 12-hour string with am or pm
    return `${hours}:${minute} ${period}`;
  }

  // Test cases to check my function works as expected
console.log(formatAs12HourClock("00:00")); // 12:00 am
console.log(formatAs12HourClock("01:30")); // 1:30 am
console.log(formatAs12HourClock("12:00")); // 12:00 pm
console.log(formatAs12HourClock("15:45")); // 3:45 pm
console.log(formatAs12HourClock("23:59")); // 11:59 pm

// I have tested edge cases like midnight (00:00) and noon (12:00)
// and also tested hours before and after noon.
// I understand the use of if conditions, string splitting, and formatting return values.


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
