// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(time.indexOf(":") + 1, time.indexOf(":") + 3);
  // console.log(minutes);
  if (hours === 0) {
    return `${hours + 12}:${minutes} am`;
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${time} am`;
}


// Chose to create an array of test objects
const testData = [
  {
    currentOutput: formatAs12HourClock("08:00"),
    targetOutput: "08:00 am",
  },
  {
    currentOutput: formatAs12HourClock("23:00"),
    targetOutput: "11:00 pm",
  },
  {
    currentOutput: formatAs12HourClock("00:00"),
    targetOutput: "12:00 am",
  },
  {
    currentOutput: formatAs12HourClock("08:15"),
    targetOutput: "08:15 am",
  },
  {
    currentOutput: formatAs12HourClock("21:25"),
    targetOutput: "9:25 pm",
  },
  {
    currentOutput: formatAs12HourClock("23:59"),
    targetOutput: "11:59 pm",
  },
  {
    currentOutput: formatAs12HourClock("11:59"),
    targetOutput: "11:59 am",
  },
  {
    currentOutput: formatAs12HourClock("4:05"),
    targetOutput: "4:05 am",
  },
  {
    currentOutput: formatAs12HourClock("13:05"),
    targetOutput: "1:05 pm",
  },
];

// Used the map array method to iterate through the test data.
testData.map((data) =>
  console.assert(
    data.currentOutput === data.targetOutput,
    `current output: ${data.currentOutput}, target output: ${data.targetOutput}`
  )
);

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

