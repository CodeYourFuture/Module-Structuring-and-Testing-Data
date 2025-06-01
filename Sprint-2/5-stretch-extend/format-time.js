// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {

// There are further validations that I can do to ensure the input valid,
// but I don't think that's necessary at this time

  const [hours, minutes] = time.split(":");

  if (Number(hours) > 23 || Number(minutes) > 59) {
    throw new Error("Not a valid time");
  }

  if (Number(hours) === 0) {
    return `12:${minutes} am`;
  }

  if (Number(hours) === 12) {
    return `12:${minutes} pm`;
  }

  if (Number(hours) > 12) {
    return `${Number(hours) - 12}:${minutes} pm`;
  }

  return `${Number(hours)}:${minutes} am`;
}

// Chose to create an array of test objects
// I've also chosen not to pad single digit hours with a leading zero
const testData = [
  {
    currentOutput: formatAs12HourClock("08:00"),
    targetOutput: "8:00 am",
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
    currentOutput: formatAs12HourClock("12:00"),
    targetOutput: "12:00 pm",
  },
  {
    currentOutput: formatAs12HourClock("8:15"),
    targetOutput: "8:15 am",
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
  {
    currentOutput: formatAs12HourClock("12:05"),
    targetOutput: "12:05 pm",
  },
];

// Used the map array method to iterate through the test data.
testData.map((data) =>
  console.assert(
    data.currentOutput === data.targetOutput,
    `current output: ${data.currentOutput}, target output: ${data.targetOutput}`
  )
);


