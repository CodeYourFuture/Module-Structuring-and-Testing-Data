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
// pad() is called 3 times because it is used once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Because the first call to pad() is pad(totalHours), and formatTimeDisplay(61) calculates totalHours as 0, the value passed to pad() as num is 0.

// c) What is the return value of pad when called for the first time?
// When pad() is called for the first time, num is 0 because totalHours is 0.
// The function converts it to a string and adds a leading zero, so the return value is "00".

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// Because the last call to pad() is pad(remainingSeconds) and formatTimeDisplay(61) calculates remainingSeconds as 1 (61 % 60 = 1), the value passed into pad() as num is 1.

// e) What is the return value of pad when it is called for the last time in this program? Explain your answer
// The return value of pad() when it is called for the last time is "01" because num is 1, and the function pads numbers by adding a leading zero.
