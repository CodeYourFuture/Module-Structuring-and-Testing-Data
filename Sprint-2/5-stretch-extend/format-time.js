// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

  function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
const currentOutput = formatAs12HourClock("08:00"); // sample test for morning times
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00"); //sample test for night time just before mid night
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("24:00"); //sample test at mid night
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
const currentOutput4 = formatAs12HourClock("12:00"); //sample test at mid day
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
 // the test failed for midnight and middle of day when the time is about to change

//I will write Correction for the code here
/*
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours === 0 || hours === 24) {
    return "12:00 am"; // Midnight case fixed
  } else if (hours === 12) {
    return "12:00 pm"; // Noon case fixed
  } else if (hours > 12) {
    return `${hours - 12}:00 pm`; // Convert 24-hour format to 12-hour PM
  } else {
    return `${hours}:00 am`; // Remove leading zero for AM times
  }
}
*/