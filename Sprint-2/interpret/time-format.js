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

// a) When formatTimeDisplay is called how many times will pad be called? Three times: once for each time component (hours, minutes, seconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time? 0 = totalHours

// c) What is the return value of pad is called for the first time? The return value of pad for the first call is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//The last time pad is called is for remainingSeconds, which has a value of 1.
//So, num is assigned the value 1 in this final call to pad.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//In the last call, pad receives num = 1, converts it to "1", and then pads it to "01" to ensure two digits.
//the return value of pad in the last call is "01".