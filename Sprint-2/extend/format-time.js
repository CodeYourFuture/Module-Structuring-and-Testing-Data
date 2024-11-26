// Function to be tested
function formatAs12HourClock(time) {
  time = time.split(':');
  let hour = parseInt(time[0], 10);
  let minutes = time[1];

  if (hour >= 0 && hour < 24) {
    let period = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 || 12; // Converts "0" (midnight) to "12" and formats hours correctly.
    return `${hour}:${minutes}${period}`;
  } else {
    return `${time[0]}:${time[1]} is not a valid time`;
  }
}

// Test cases
const tests = [
  { input: "00:00", expected: "12:00am" }, // Midnight
  { input: "12:00", expected: "12:00pm" }, // Noon
  { input: "01:00", expected: "1:00am" }, // Early morning
  { input: "13:00", expected: "1:00pm" }, // Afternoon
  { input: "23:59", expected: "11:59pm" }, // Last minute of the day
  { input: "11:59", expected: "11:59am" }, // Last minute of the morning
  { input: "10:15", expected: "10:15am" }, // Regular morning time
  { input: "15:45", expected: "3:45pm" }, // Regular afternoon time
  { input: "24:00", expected: "24:00 is not a valid time" }, // Invalid time
  { input: "25:30", expected: "25:30 is not a valid time" }, // Invalid hour
  { input: "-1:30", expected: "-1:30 is not a valid time" }, // Negative hour
  { input: "12:60", expected: "12:60pm" }, // Edge case: invalid minutes
  { input: "07:07", expected: "7:07am" }, // Leading zeroes in hour
];

// Running tests
for (const { input, expected } of tests) {
  const result = formatAs12HourClock(input);
  console.assert(result === expected, `Test failed for input: ${input}. Expected: ${expected}, but got: ${result}`);
}

console.log("All tests completed");