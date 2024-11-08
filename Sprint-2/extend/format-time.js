// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function convert24HoursTimeTo12Hours(time) {
  const hours = Number(time.slice(0, 2));
  // console.log(hours);
  const minutes = time.slice(3);
  // console.log(minutes);
  if (hours === 24) {
    if (minutes === '00') {
      return `12 AM`;
    }
    return `12:${minutes} AM`
  } else if (hours == 0o0) {
    if (minutes === '00') {
      return `12 AM`;
    }
    return `12:${minutes} AM`
  }
  else if (hours > 12) {
    if (minutes == '00') {
      return `${hours - 12} PM`;
    }
    return `${hours - 12}:${minutes} PM`;
  } else if (hours === 12) {
    if (minutes == '00') {
      return `12 PM`;
    }
    return `12:${minutes} PM`;
  } else if (hours < 12) {
    if (minutes == '00') {
      return `${hours.toString()} AM`;
    }
    return `${hours.toString()}:${minutes} AM`;
  }
}

// Test 1
const currentOutput = convert24HoursTimeTo12Hours("08:00");
const targetOutput = "8 AM";
console.log(currentOutput);
console.assert(currentOutput === targetOutput, `${currentOutput} is not equal ${targetOutput}`);

// Test 2
const currentOutput2 = convert24HoursTimeTo12Hours("23:00");
const targetOutput2 = "11 PM";
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = convert24HoursTimeTo12Hours("14:15");
const targetOutput3 = "2:15 PM";
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = convert24HoursTimeTo12Hours("09:55");
const targetOutput4 = "9:55 AM";
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);

// Test 5
const currentOutput5 = convert24HoursTimeTo12Hours("00:00");
const targetOutput5 = "12 AM";
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

// Test 6
const currentOutput6 = convert24HoursTimeTo12Hours("12:00");
const targetOutput6 = "12 PM";
console.log(currentOutput6);
console.assert(currentOutput6 === targetOutput6, `${currentOutput6} is not equal ${targetOutput6}`);

// Test 7
const currentOutput7 = convert24HoursTimeTo12Hours("24:00");
const targetOutput7 = "12 AM";
console.log(currentOutput7);
console.assert(currentOutput7 === targetOutput7, `${currentOutput7} is not equal ${targetOutput7}`);
