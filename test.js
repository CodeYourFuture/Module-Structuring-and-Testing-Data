// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function convert24HoursTimeTo12Hours(time) {
  const hours = Number(time.slice(0, 2)); // Extract hours as a number
  const minutes = time.slice(3); // Extract minutes

  if (hours === 24 || hours === 0) {
    // Midnight cases
    return minutes === "00" ? "12 AM" : `12:${minutes} AM`;
  } else if (hours > 12) {
    // Afternoon and evening cases
    return minutes === "00" ? `${hours - 12} PM` : `${hours - 12}:${minutes} PM`;
  } else if (hours === 12) {
    // Noon cases
    return minutes === "00" ? "12 PM" : `12:${minutes} PM`;
  } else {
    // Morning cases
    return minutes === "00" ? `${hours} AM` : `${hours}:${minutes} AM`;
  }
}

// 1 st
const testOutput = convert24HoursTimeTo12Hours("08:00"); // Renamed variable
const expectedOutput = "8 AM";
console.log(testOutput);
console.assert(testOutput === expectedOutput, `${testOutput} is not equal to ${expectedOutput}`);

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

// 1st test
const currentOutput = convert24HoursTimeTo12Hours("08:00");
const targetOutput = "8 AM";
console.log(currentOutput);
console.assert(currentOutput === targetOutput, `${currentOutput} is not equal ${targetOutput}`);