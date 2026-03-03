// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
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

// Test suite for formatAs12HourClock function

function runTests() {
  const testCases = [
    // Edge cases and boundaries
    { input: "00:00", expected: "12:00 am", description: "Midnight" },
    { input: "12:00", expected: "12:00 pm", description: "Noon" },
    { input: "00:01", expected: "12:01 am", description: "Just after midnight" },
    { input: "11:59", expected: "11:59 am", description: "Just before noon" },
    { input: "12:01", expected: "12:01 pm", description: "Just after noon" },
    { input: "23:59", expected: "11:59 pm", description: "Just before midnight" },

    // AM hours
    { input: "01:00", expected: "01:00 am", description: "1 AM" },
    { input: "02:30", expected: "02:30 am", description: "2:30 AM" },
    { input: "09:15", expected: "09:15 am", description: "9:15 AM" },
    { input: "11:45", expected: "11:45 am", description: "11:45 AM" },

    // PM hours
    { input: "13:00", expected: "01:00 pm", description: "1 PM" },
    { input: "14:30", expected: "02:30 pm", description: "2:30 PM" },
    { input: "17:45", expected: "05:45 pm", description: "5:45 PM" },
    { input: "22:15", expected: "10:15 pm", description: "10:15 PM" },

    // Invalid inputs
    { input: "24:00", expected: "12:00 am", description: "24:00 (should be midnight)" },
    { input: "25:00", expected: null, description: "Invalid hour > 24" },
    { input: "12:60", expected: null, description: "Invalid minutes > 59" },
    { input: "9:00", expected: null, description: "Missing leading zero" },
    { input: "09-00", expected: null, description: "Wrong separator" },
    { input: "abc", expected: null, description: "Non-numeric input" },
    { input: "", expected: null, description: "Empty string" },
    { input: "12", expected: null, description: "Incomplete time" },
    { input: "12345", expected: null, description: "Too many digits" },
  ];

  console.log("Running tests for formatAs12HourClock...\n");

  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    try {
      const result = formatAs12HourClock(testCase.input);
      const passed_test = result === testCase.expected;

      if (passed_test) {
        console.log(`Test ${index + 1}: ${testCase.description} - PASSED`);
        passed++;
      } else {
        console.log(`Test ${index + 1}: ${testCase.description} - FAILED`);
        console.log(`Input: "${testCase.input}"`);
        console.log(`Expected: "${testCase.expected}"`);
        console.log(`Got: "${result}"\n`);
        failed++;
      }
    } catch (error) {
      console.log(`Test ${index + 1}: ${testCase.description} - ERROR`);
      console.log(`Input: "${testCase.input}"`);
      console.log(`Error: ${error.message}\n`);
      failed++;
    }
  });

  console.log(`\nTests completed: ${passed} passed, ${failed} failed`);
}

// Run the tests
runTests();

// Fixed Code:

function formatAs12HourClock(time) {
  // Input validation
  if (typeof time !== 'string' || !time) {
    return null;
  }

  // Check format: HH:MM with leading zeros
  const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
  if (!timeRegex.test(time)) {
    return null;
  }

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  // Handle midnight (00:00)
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  // Handle noon (12:00) and other PM hours
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours > 12) {
    const pmHours = hours - 12;
    // Add leading zero for hours 1-9
    const formattedHours = pmHours < 10 ? `0${pmHours}` : `${pmHours}`;
    return `${formattedHours}:${minutes} pm`;
  }

  // AM hours (1-11)
  // Keep leading zero for hours 1-9
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  return `${formattedHours}:${minutes} am`;
}

