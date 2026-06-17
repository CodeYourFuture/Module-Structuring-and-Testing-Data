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
// =============> Pad's called three times, per hours, minutes and seconds each.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> Answer is zero, due to 61 seconds being less than an hour.

// c) What is the return value of pad is called for the first time?
// =============> The function returns 00, after running twice. 

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> When it runs for the last time it's calculating remaining seconds, with value of 61, after dedicting minutues the answer
//is 1. 

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> Answer is 01, because numString convert 1 to "1", then loop runs again, now it's "01", because of "while (numString.length < 2) {
// numString = "0" + numString;}" , then the loop stops. 
