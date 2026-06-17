function formatAs12HourClock(time) {
  const timeParts = time.split(":");
  const mins = timeParts[1].padStart(2, "0");
  const hoursInt = Number(timeParts[0]);
  if (hoursInt === 0) return `${12}:${mins} am`;
  if (hoursInt < 12) return `${timeParts[0].padStart(2, "0")}:${mins} am`;
  if (hoursInt === 12)
    return `${timeParts[0]}:${timeParts[1].padStart(2, "0")} pm`;
  return `${(hoursInt - 12).toString().padStart(2, "0")}:${mins} pm`;
}

console.log(formatAs12HourClock("0:0"));

const testValues = [
  ["0:0", "12:00 am"],
  ["00:00", "12:00 am"],
  ["08:00", "08:00 am"],
  ["8:25", "08:25 am"],
  ["11:59", "11:59 am"],
  ["12:00", "12:00 pm"],
  ["12:01", "12:01 pm"],
  ["13:00", "01:00 pm"],
  ["16:5", "04:05 pm"],
  ["23:00", "11:00 pm"],
];

for (const [input, expectedOutput] of testValues) {
  const actualOutput = formatAs12HourClock(input);
  console.assert(
    actualOutput === expectedOutput,
    `Current output is ${actualOutput}. Expected outout is ${expectedOutput}`
  );
}
