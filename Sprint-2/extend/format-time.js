/* 
 This is the latest solution to the problem from the prep.
  Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

  function formatAs12HourClock(time) {
    const hours = Number(time.slice(0, 2));
    console.log(hours);
    if (hours > 12) {
      return `${hours - 12}:00 pm`;
    }
    return `${time} am`;
  }

*/

// ====================== function and cases =======================


// time.slice(0, 2): method that return the positions 0 and 1 of the string,
// const hours = Number(time.slice(0, 2)) will convert the substring in numbers to manipulate and performs calculations.


function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); //Extracts characters from position 0 to 2 (not including the character at index 2)
  const minutes = time.slice(3, 5); // extract characters from position 3 to 5 (for minutes part)

  if (hours === 0) {
    return `12:${minutes} am`;
  } else if (hours === 12) {
    return `12:${minutes} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else {
    return `${hours}:${minutes} am`;
  }
  //the previous conditions always lead to a return
}


// ============================= test ===============================

const currentOutput = formatAs12HourClock("00:42");
const targetOutput = "12:42 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);


// ============================= test 1 =============================

const currentOutput1 = formatAs12HourClock("00:00");
const targetOutput1 = "12:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);


// ============================= test 2 failed ======================

const currentOutput2 = formatAs12HourClock("26:00"); //26 > 14; go in the second else if, 26-12=14
const targetOutput2 = "10:00 pm";

console.assert(
  currentOutput2 === targetOutput2,
  `current output time: ${currentOutput2}, target output: ${targetOutput2}`
  //will print     Assertion failed: current output time: 14:00 pm, target output: 10:00 pm
);



const testCases = [
  { input: "00:00", expected: "12:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "15:30", expected: "3:30 pm" },
  { input: "08:05", expected: "8:05 am" },
  { input: "23:59", expected: "11:59 pm" },
];

for (const { input, expected } of testCases) {
  const result = formatAs12HourClock(input);
  console.assert(
    result === expected,
    `Input: ${input} | Expected: ${expected}, but got: ${result}`
  );
}

// ================ icons test with console/log ========================

const testCasesIcons = [
  { input: "25:00", expected: "12:00 am" }, //test failed
  { input: "12:00", expected: "12:00 pm" },
  { input: "15:30", expected: "3:30 pm" },
  { input: "08:05", expected: "8:05 am" },
  { input: "23:59", expected: "11:59 pm" },
];


for (const { input, expected } of testCasesIcons) {
  const result = formatAs12HourClock(input);
  if (result === expected) {
    console.log(`✅ Test passed! Input: ${input} | Output: ${result}`);
  } else {
    console.error(
      `❌ Test failed! Input: ${input} | Expected: ${expected}, but got: ${result}`
    );
  }
}


