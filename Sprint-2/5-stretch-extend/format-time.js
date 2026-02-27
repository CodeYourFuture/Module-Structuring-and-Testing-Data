// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//function formatAs12HourClock(time) {
  //const hours = Number(time.slice(0, 2));
  //if (hours > 12) {
   // return `${hours - 12}:00 pm`;
  //}
  //return `${time} am`;
//}

//const currentOutput = formatAs12HourClock("08:00");
//const targetOutput = "08:00 am";
//console.assert(
  //currentOutput === targetOutput,
  //`current output: ${currentOutput}, target output: ${targetOutput}`
//);

//const currentOutput2 = formatAs12HourClock("23:00");
//const targetOutput2 = "11:00 pm";
//console.assert(
  //currentOutput2 === targetOutput2,
  //`current output: ${currentOutput2}, target output: ${targetOutput2}`
//);

// Corrected version
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
    return `${hours - 12}:${minutes} pm`;
  }

  return `${time} am`;
}

// Test Multiple PM conversions
console.assert(
  formatAs12HourClock("13:15") === "1:15 pm",
  "13:15 failed"
);

console.assert(
  formatAs12HourClock("18:45") === "6:45 pm",
  "18:45 failed"
);

console.assert(
  formatAs12HourClock("21:10") === "9:10 pm",
  "21:10 failed"
);

// Boundary tests
console.assert(
  formatAs12HourClock("11:59") === "11:59 am",
  "11:59 boundary failed"
);
