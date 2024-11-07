// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/*function formatAs12HourClock(time) {
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
);*/
/*Answer:
The provided function formatAs12HourClock(time) attempts to convert a 24-hour time string (e.g., "23:00") into a 12-hour format with an "am/pm" suffix. There are a couple of issues in this approach and some edge cases that have not been fully considered.

***Problems:
Midnight and Noon Handling:
"00:00" (midnight) and "12:00" (noon) need special handling. Right now, the function doesn't account for these edge cases properly.
Minutes and Suffix:
The code always appends ":00" even if the input time contains non-zero minutes (like "08:15" or "17:30").
24-Hour Format Inputs Less Than 10:
The function does not properly handle hours less than 10 when the input format is "09:00". The hours are expected to be always two digits, but the function may fail when the string is less than two digits.

***Plan
Add handling for the special cases of midnight (00:00) and noon (12:00).
Include a mechanism for processing times with minutes (i.e., don't assume the minutes are always ":00").
Correctly handle hours in the 12-hour range (e.g., "12:00 am" should be returned for "00:00").*/

//Solution://
function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(":");
  hours = Number(hours);  // Convert hours to a number
  
  let suffix = 'am';
  
  if (hours === 0) {
    hours = 12;  // Midnight is 12 am
  } else if (hours === 12) {
    suffix = 'pm';  // Noon is 12 pm
  } else if (hours > 12) {
    hours -= 12;  // Convert to 12-hour format
    suffix = 'pm';
  }
  
  //  we always format the hour as two digits and append minutes if available
  minutes = minutes || "00";  // Default to "00" if minutes are missing
  return `${String(hours).padStart(2, '0')}:${minutes} ${suffix}`;
}
//Some Test cases//
// Test Case 1: Normal AM time
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(currentOutput1 === targetOutput1, `Test 1 Failed: ${currentOutput1}`);

// Test Case 2: Normal PM time
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(currentOutput2 === targetOutput2, `Test 2 Failed: ${currentOutput2}`);

// Test Case 3: Midnight (00:00)
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(currentOutput3 === targetOutput3, `Test 3 Failed: ${currentOutput3}`);

