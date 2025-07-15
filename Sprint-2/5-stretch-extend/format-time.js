function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    // midnight
    return `12:${minutes} am`;
  } else if (hours === 12) {
    // noon
    return `12:${minutes} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else {
    // 1am to 11am
    return `${time} am`;
  }
}

// Tests:
const tests = [
  { input: "00:00", expected: "12:00 am" },
  { input: "08:00", expected: "08:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "15:30", expected: "3:30 pm" },
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

