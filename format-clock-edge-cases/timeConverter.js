function formatAs12HourClock(time) {
  const [hoursStr, minutesStr] = time.split(":");
  let hours = Number(hoursStr);

  const period = hours >= 12 ? "pm" : "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  const formattedHours = hours.toString().padStart(2, "0");

  return `${formattedHours}:${minutesStr} ${period}`;
}

export { formatAs12HourClock };