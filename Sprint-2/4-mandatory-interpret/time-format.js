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

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// 0

// c) What is the return value of pad is called for the first time?
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// value assigned is 1, because pad is called with remainingSeconds as the argument.
// remainingSeconds is the remainder of 61 divided by 60, which is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// return value is "01". First, the pad function converts input num to string so the return type is string.
// Second, the function pads the start of the string with up to two "0" characters, and in this case
// since num is a single character, it only pads one "0" at the start.
