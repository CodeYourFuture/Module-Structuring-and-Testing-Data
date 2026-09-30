function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} AM`;
  }
  if (hours === 12) {
    return `12:${minutes} PM`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} PM`;
  }
  return `${time} AM`;
}

export { formatAs12HourClock };
