function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  let rawHour;
  let period;

  if (hours === 0) {
    rawHour = 12;
    period = "am";
  } else if (hours === 12) {
    rawHour = 12;
    period = "pm";
  } else if (hours > 12) {
    rawHour = hours - 12;
    period = "pm";
  } else {
    rawHour = hours;
    period = "am";
  }

  const formattedHour = String(rawHour).padStart(2, "0");

  return `${formattedHour}:${minutes} ${period}`;
}


// Tests:
const tests = [
  { input: "00:00", expected: "12:00 am" },
  { input: "08:00", expected: "08:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "15:30", expected: "03:30 pm" },
  { input: "23:59", expected: "11:59 pm" },
  { input: "11:15", expected: "11:15 am" },
];

tests.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(
    output === expected,
    `FAIL: input=${input}, output=${output}, expected=${expected}`
  );
});


