// const 12HourClockTime = "20:53"; it is in 24 hour format
// const 24hourClockTime = "08:53"; it is in 12 hour format then we will write correctly
// const twelveHourClockTime = "08:53 PM"; // Example 12-hour format time
// const twentyFourHourClockTime = "20:53"; // Example 24-hour format time

const twelveHourClockTime = "08:53 PM"; // Example 12-hour format time
const twentyFourHourClockTime = "20:53"; // Example 24-hour format time
function convertTo12HourClockTime(time24clock) {
  let [hours, minutes] = time24clock.split(":").map(Number);
  const modifier = hours >= 12 ? "PM" : "AM";

  if (hours === 0) {
    hours = 12; // Midnight case
  } else if (hours > 12) {
    hours -= 12; // Convert to 12-hour format
  }

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${modifier}`;
}
function convertTo24HourClockTime(time12clock) {
  let [time, modifier] = time12clock.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
console.log(convertTo12HourClockTime(twentyFourHourClockTime)); // Output: "08:53 PM"