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
// It only handles ":00" times — doesn't process the minutes properly.
// It returns "08:00 am" even though the 08:00 input results in "08:00 am" due to hardcoding the entire string.
// It does not handle: /Midnight (00:00) /Noon (12:00) /Times with non-zero minutes (e.g., 13:45)
// It always appends " am" even if time is 12:00 noon or later.
function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");
  let hours = Number(hourStr);
  const suffix = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const formattedHour = String(hours).padStart(2, "0");

  return `${formattedHour}:${minuteStr} ${suffix}`;
}

// Test cases
const testCases = [
  { input: "08:00", expected: "08:00 am" },
  { input: "23:00", expected: "11:00 pm" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "00:00", expected: "12:00 am" },
  { input: "13:45", expected: "01:45 pm" },
  { input: "11:30", expected: "11:30 am" },
  { input: "15:15", expected: "03:15 pm" },
];

testCases.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(output === expected, `Test failed for ${input}: got ${output}, expected ${expected}`);
});

console.log("✅ All tests completed");
// This function now correctly formats times in 12-hour clock format, handling edge cases like midnight and noon, and works with any minute value.
// It also passes all the test cases provided, ensuring that it behaves as expected for a variety of inputs.

