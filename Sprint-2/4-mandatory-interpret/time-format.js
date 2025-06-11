function pad(num) {
  if (typeof num !== "number") {
    return "00"; // Return "00" if num is not a number
  }
  return num.toString().padStart(2, "0");
}

console.log(pad(1));

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
// The value is "0"

// c) What is the return value of pad is called for the first time?
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1 According to the return statement, the last pad call uses remainingSeconds which equals seconds % 60. Since 61 % 60  the value is "1".

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// "01" Because we use padStart function to format remainingSeconds whose value is "1". The padStart function
// ensures that  the num is at least 2 characters long by adding leading 0s if necessary.
