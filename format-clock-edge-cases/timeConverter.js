function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours === 0) {
    return `12:${time.slice(-2)} am`;
  }

  if (hours === 12) {
    return `${time} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}:${time.slice(-2)} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
