// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // Split the input time string into hours and minutes parts.
  let [hours, minutes] = time.split(":");

  // Convert hours to number for easier manipulation.
  hours = Number(hours);

  // Set the suffix to "pm" if the hour is 12 or higher; otherwise, set it to "am".
  let suffix = hours >= 12 ? "pm" : "am";

  // Adjust hour value for 12-hour format:
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  //Ensure hours and minutes are two digits, padding with "0" if needed.
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  // Return the formatted 12-hour
  return `${hours}:${minutes} ${suffix}`;
}

const currentOutput = formatAs12HourClock("1:3");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

console.log(currentOutput);

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
