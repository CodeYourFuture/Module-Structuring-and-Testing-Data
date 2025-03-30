// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours === 0) {
//     return `${hours}:00 am`;
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


function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); // Extracts the hour part from the input time
  const minutes = time.slice(3);
  if (hours === 0) {
    return `12:${minutes} am`; // Special case for 12:00 (12 noon)
  }
  else if (hours < 12) {
    return `${hours}:${minutes} am`;
  }
 
  if (hours === 12) {
    return `${hours}:${minutes} pm`; // For hours > 12, convert to 12-hour format and append "pm"
  }
  else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
}
}


console.log(formatAs12HourClock("00:00")); // Expected: "12:00 am"
console.log(formatAs12HourClock("08:00")); // Expected: "08:00 am"
console.log(formatAs12HourClock("12:00")); // Expected: "12:00 pm"
console.log(formatAs12HourClock("23:00")); // Expected: "11:00 pm"
console.log(formatAs12HourClock("15:30")); // Expected: "3:00 pm"