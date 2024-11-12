function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}
console.log(formatTimeDisplay(61));


// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//Answer: 3 times.  Once for each of the hours, minutes, and seconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//Answer: num = 0.  Total Hour of 61 seconds is 0.

// c) What is the return value of pad is called for the first time?
//Answer: "00". The first time pad is called, it pads the numbe

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: num = 1. Because there is 1 second remaining after accounting for the full minutes.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: "01". remaining seconds is 1, and it is at least 2 digits long.