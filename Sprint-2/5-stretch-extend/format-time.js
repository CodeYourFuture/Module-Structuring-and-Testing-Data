// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

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

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} am`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours > 12) {
    return `${pad(hours - 12)}:${minutes} pm`;
  }
  return `${pad(hours)}:${minutes} am`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

// Test cases for different groups of input data and edge cases
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "Test midnight failed"
);
console.assert(formatAs12HourClock("01:00") === "01:00 am", "Test 1am failed");
console.assert(formatAs12HourClock("08:00") === "08:00 am", "Test 8am failed");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Test noon failed");
console.assert(formatAs12HourClock("13:00") === "01:00 pm", "Test 1pm failed");
console.assert(
  formatAs12HourClock("11:59") === "11:59 am",
  "Test 11:59am failed"
);
console.assert(
  formatAs12HourClock("12:59") === "12:59 pm",
  "Test 12:59pm failed"
);
console.assert(
  formatAs12HourClock("15:30") === "03:30 pm",
  "Test 3:30pm failed"
);
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Test 11pm failed");
console.assert(
  formatAs12HourClock("23:59") === "11:59 pm",
  "Test 11:59pm failed"
);
