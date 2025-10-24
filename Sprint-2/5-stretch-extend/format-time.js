// Fixed function
function formatAs12HourClock(time) {
  // Validate input format
  if (typeof time !== "string" || !time.includes(":")) {
    return "Invalid time";
  }

  const [hourStr, minuteStr] = time.split(":");
  const hours = Number(hourStr);
  const minutes = Number(minuteStr);
  let period = "am";

  // Validate range
  if (
    isNaN(hours) || isNaN(minutes) ||
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59
  ) {
    return "Invalid time";
  }

  // Midnight
  if (hours === 0) {
    return `12:${minuteStr.padStart(2, "0")} am`;
  }

  // Noon
  if (hours === 12) {
    period = "pm";
    return `12:${minuteStr.padStart(2, "0")} ${period}`;
  }

  // PM hours
  if (hours > 12) {
    return `${hours - 12}:${minuteStr.padStart(2, "0")} pm`;
  }

  // AM hours
  return `${hours}:${minuteStr.padStart(2, "0")} ${period}`;
}

// ✅ Re-tests
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "8:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
); 

const currentOutput2 = formatAs12HourClock("7:45");
const targetOutput2 = "7:45 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("23:00");
const targetOutput3 = "11:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("00:00");
const targetOutput5 = "12:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("15:30");
const targetOutput6 = "3:30 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("11:45");
const targetOutput7 = "11:45 am";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("25:30");
const targetOutput8 = "Invalid time";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClock("1724688");
const targetOutput9 = "Invalid time";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);

// ✅ Display output
console.log(formatAs12HourClock("08:00"));
console.log(formatAs12HourClock("7:45"));
console.log(formatAs12HourClock("23:00"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("15:30"));
console.log(formatAs12HourClock("11:45"));
console.log(formatAs12HourClock("25:30"));
console.log(formatAs12HourClock("1724688"));
