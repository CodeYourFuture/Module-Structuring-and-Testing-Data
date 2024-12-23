// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


// function formatAs12HourClock(time) {
//   const [hoursStr, minutes] = time.split(":");
//   const hours = Number(hoursStr);

//   if (hours === 0) {
//     return `12:${minutes} am`;
//   }
//   if (hours === 12) {
//     return `12:${minutes} pm`;
//   }
//   if (hours > 12) {
//     return `${hours - 12}:${minutes} pm`;
//   }
//   return `${hours}:${minutes} am`;
// }

function formatAs12HourClock(time) {
  const [hoursStr, minutes] = time.split(":")
  const hours = Number(hoursStr)
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }if(hours === 0){
    return `${12}:${minutes} am`
  }if(hours === 12){
    return `${12}:${minutes} pm`
  }
  return `${hours}:${minutes} am`;
}
console.log(formatAs12HourClock("23:00"))


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
// console.log(formatAs12HourClock("00:12",));
function runTests() {
  const testCases = [
    { input: "00:00", expected: "12:00 am" }, // Midnight
    { input: "12:00", expected: "12:00 pm" }, // Noon
    { input: "23:59", expected: "11:59 pm" }, // Last minute of the day
    { input: "01:00", expected: "1:00 am" },  // Early morning
    { input: "08:30", expected: "8:30 am" },  // Morning time
    { input: "15:45", expected: "3:45 pm" },  // Afternoon
    { input: "20:15", expected: "8:15 pm" },  // Evening
  ];

  testCases.forEach(({ input, expected }) => {
    const output = formatAs12HourClock(input);
    console.assert(
      output === expected,
      `For input '${input}', expected '${expected}', but got '${output}'.`
    );
  });

  console.log("All tests completed.");
}

runTests();