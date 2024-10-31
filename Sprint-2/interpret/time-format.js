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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?pad will be called three times each time formatTimeDisplay is executed: once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?When pad is called for the first time, num will be assigned the total hours, which is 0 in this case.


// c) What is the return value of pad is called for the first time?The return value of pad for 0 will be "00", as pad adds a leading zero to make it two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer:When pad is called for the last time, num is assigned the remaining seconds, which is 1 in this case (from the input 61).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer:The return value of pad when it is called with 1 is "01", as pad ensures two-digit formatting.
