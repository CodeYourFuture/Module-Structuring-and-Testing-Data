//Think of as many edge-cases as you can with this code.
// Write tests for all of them, and fix this code so that it works correctly for all valid inputs.
//  You don't need to worry about invalid inputs (e.g. `"25:00"`).

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");

  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${paddedMinutes} pm`;
  } else if (hours === 12) {
    return `${paddedHours}:${paddedMinutes} pm`;
  } else if (hours === 0) {
    return `12:${paddedMinutes} am`;
  } else {
    return `${paddedHours}:${paddedMinutes} am`;
  }
}

export { formatAs12HourClock };
