// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hourStr = time.slice(0, 2);
  const minuteStr = time.slice(3, 5);
  const hours = Number(hourStr);

  if (hours === 0) {
    return `12:${minuteStr} am`;
  } else if (hours === 12) {
    return `12:${minuteStr} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minuteStr} pm`;
  } else {
    return `${hourStr.padStart(2, "0")}:${minuteStr} am`;
  }
}

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

const tests = [
  { input: "08:00", expected: "08:00 am" },
  { input: "23:00", expected: "11:00 pm" },
  { input: "00:00", expected: "12:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "15:30", expected: "3:30 pm" },
  { input: "01:15", expected: "01:15 am" },
  { input: "11:45", expected: "11:45 am" },
  { input: "13:05", expected: "1:05 pm" },
  { input: "10:30", expected: "10:30 am" },
  { input: "22:45", expected: "10:45 pm" },

  { input: "00:01", expected: "12:01 am" },
  { input: "12:01", expected: "12:01 pm" },
  { input: "23:59", expected: "11:59 pm" },
  { input: "11:59", expected: "11:59 am" },
];

let passedTests = 0;

try {
  tests.forEach(({ input, expected }) => {
    const actual = formatAs12HourClock(input);
    console.assert(
      actual === expected,
      `Test failed for input "${input}": expected "${expected}", got "${actual}"`
    );
    if (actual === expected) {
      passedTests++;
    }
  });

  console.log(`${passedTests} out of ${tests.length} tests passed!`);
} catch (error) {
  console.error("An error occurred during testing:", error);
}
