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
// =============> 3 Times (once for hours, once for minutes, once for seconds)


// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61))

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> When pad is called for the last time, the value 1 is passed to it as the argument. This happens when the formatTimeDisplay function works out the remaining seconds. The function first turns the number into a string, then adds a zero at the start to make sure it’s two digits long.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is "01" — because the number 1 gets turned into the string "1" and then a zero is added at the front.
