// // This is the latest solution to the problem from the prep.
// // Make sure to do the prep before you do the coursework
// // Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );

// // ======= TESTS =======

// // Before midday
// console.log(formatAs12HourClock("08:00")); // 08:00 am
// console.log(formatAs12HourClock("09:45")); // 09:45 am

// // Midday / Noon
// console.log(formatAs12HourClock("12:00")); // 12:00 pm
// console.log(formatAs12HourClock("12:30")); // 12:30 pm

// // After midday
// console.log(formatAs12HourClock("14:15")); // 02:15 pm
// console.log(formatAs12HourClock("23:00")); // 11:00 pm

// // Midnight
// console.log(formatAs12HourClock("00:00")); // 12:00 am
// console.log(formatAs12HourClock("00:30")); // 12:30 am

// Function to convert 24-hour time to 12-hour time
function formatAs12HourClock(time) {
  // Split the time into hours and minutes
  let parts = time.split(":");
  let hours = Number(parts[0]);
  let minutes = parts[1];

  // Decide if it's am or pm
  let suffix = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours > 12) {
    hours = hours - 12; // afternoon
  }

  // Make sure hours are always 2 digits
  let hoursStr = hours.toString().padStart(2, "0");

  // Return the formatted time
  return hoursStr + ":" + minutes + " " + suffix;
}

// ======= TESTS =======

// Before midday
console.log(formatAs12HourClock("08:00"));
console.log(formatAs12HourClock("09:45"));

// Midday / Noon
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("12:30"));

// After midday
console.log(formatAs12HourClock("14:15"));
console.log(formatAs12HourClock("23:00"));

// Midnight
console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("00:30"));
