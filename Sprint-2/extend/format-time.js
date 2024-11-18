// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
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

//If the input time is "00:00", the function returns "0:00 am", which is incorrect. Midnight should be represented as "12:00 am".
//If the input is "12:00", the function returns "12:00 am", which is incorrect. Noon should be represented as "12:00 pm".
//If the time has a single digit for the hour (e.g., "03:00"), the function will return it in the format "3:00 am", which is missing a leading zero. 
//There should be some validation for invalid input (e.g., strings not in a valid time format, non-numeric strings, etc.).
//The function doesn't handle minutes correctly.
//Fixed code:
function formatAs12HourClock(time) {
  if (!/^([01]?\d|2[0-3]):([0-5]?\d)$/.test(time)) {
    throw new Error("Invalid time format. Use 'hh:mm' format.");
  }
const [hours, minutes] = time.split(':').map(Number);

  
  let period = 'am'; 
  let formattedHours = hours;

  if (hours === 0) {
    formattedHours = 12;
    period = 'am'; // Midnight
  } else if (hours === 12) {
    period = 'pm'; // Noon
  } else if (hours > 12) {
    formattedHours = hours - 12;
    period = 'pm';
  }
  const formattedHoursString = formattedHours.toString().padStart(2, '0');
  const formattedMinutesString = minutes.toString().padStart(2, '0');

  return `${formattedHoursString}:${formattedMinutesString} ${period}`;
}

// Examples
console.log(formatAs12HourClock("00:15")); // "12:15 am"
console.log(formatAs12HourClock("12:30")); // "12:30 pm"
console.log(formatAs12HourClock("23:45")); // "11:45 pm"
console.log(formatAs12HourClock("27:99")); // Throws an error
