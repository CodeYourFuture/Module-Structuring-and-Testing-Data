function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours === 0) {
    return `${String(hours + 12).padStart(2, "0")}${time.slice(2, 5)} am`;
  }
  if (hours === 12) {
    return `${time} pm`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}${time.slice(2, 5)} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
