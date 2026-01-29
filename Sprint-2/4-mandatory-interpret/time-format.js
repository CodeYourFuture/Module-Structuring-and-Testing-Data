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
// =============> 3
formatTimeDisplay(61);

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> It is called return value and will be '00'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The function is passed 61 which means 1 minute and 1 second so the value passed to pad for the last call is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 is passed to function as a number and stored in num then num is turned into a string and one '0' will be added
// to the beginning of num so the returned value will be '01'
