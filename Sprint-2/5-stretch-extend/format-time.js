// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.split(":")[1];

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  return `${time} am`;
}
