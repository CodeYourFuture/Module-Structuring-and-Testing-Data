function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
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
// =============> 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1: the pad() function pads single digit numbers to 2 digits, to display times. since 60 seconds dont hold an hour, the first time unit is 0 (hour) then the second should be 1 since 60 sec is a min, and finally the last one refers to the seconds, after 60 there is 1 left to make it 61 secs.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> 01 since we pad the value (1) with a 0 to make it two digits.
