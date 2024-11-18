function pad(num) {
  // Converts num to a string and pads it to 2 characters with "0" if necessary
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  // seconds = 61
  const remainingSeconds = seconds % 60; // remainingSeconds = 61 % 60 = 1
  const totalMinutes = (seconds - remainingSeconds) / 60; // totalMinutes = (61 - 1) / 60 = 1
  const remainingMinutes = totalMinutes % 60; // remainingMinutes = 1 % 60 = 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; // totalHours = (1 - 1) / 60 = 0

  // Call to pad for totalHours
  const hoursFormatted = pad(totalHours); // pad(0) → "00"
  // Call to pad for remainingMinutes
  const minutesFormatted = pad(remainingMinutes); // pad(1) → "01"
  // Call to pad for remainingSeconds
  const secondsFormatted = pad(remainingSeconds); // pad(1) → "01"

  // Return the formatted time as a string
  return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`; // "00:01:01"
}

console.log(formatTimeDisplay(61)); // Output: "00:01:01"


// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3

// Call formatTimeDisplay with an input of 61, now answer the following:

//b) What is the value assigned to num when pad is called for the first time?
//   The value assigned to num when pad is called for the first time is 0 (from pad(totalHours)).

//c) What is the return value of pad when it is called for the first time?
//   The return value of pad(0) is "00" because padStart(2, "0") ensures that it is 2 characters wide, padded with a leading zero.

//d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer.
//   The value assigned to num when pad is called for the last time is 1. This is because the last pad() call is for remainingSeconds, which is pad(1).

//e) What is the return value when pad is called for the last time in this program? Explain your answer.
//   The return value when pad is called for the last time . This is because pad converts 1 to a string and uses padStart resulting in "01".