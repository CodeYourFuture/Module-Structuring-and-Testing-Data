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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad is called 3 times per call to formatTimeDisplay (once for totalHours, once for remainingMinutes, once for remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:
// (remainingSeconds = 1, totalMinutes = 1, remainingMinutes = 1, totalHours = 0)

// b) What is the value assigned to num when pad is called for the first time?
// =============> num = 0 (totalHours), because totalHours is the first argument in the template literal.

// c) What is the return value of pad when it is called for the first time?
// =============> "00" — "0".length < 2, so "0" is prepended, giving "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> num = 1 (remainingSeconds). It is the last argument passed in the template literal, so pad is called with it last.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> "01" — "1".length < 2, so "0" is prepended, giving "01".
