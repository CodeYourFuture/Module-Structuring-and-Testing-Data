function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// ===> 3 times — once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// ===> 0 — the first pad call is for totalHours, which is 0 when input is 61

// c) What is the return value of pad when called for the first time?
// ===> "00" — because pad(0) returns the string "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// ===> 1 — the last pad call is for remainingSeconds, which is 61 % 60 = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// ===> "01" — because pad(1) turns 1 into "01" using padStart(2, "0")

// Example run:
console.log(formatTimeDisplay(61)); // Output: "00:01:01"

