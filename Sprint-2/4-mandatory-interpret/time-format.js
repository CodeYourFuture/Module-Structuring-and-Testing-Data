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
// =============> The pad function will be called three times:
//Once for totalHours.
//Once for remainingMinutes.
//Once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following: When you call formatTimeDisplay(61), the first value passed to pad is 0 because totalHours is calculated as 0 (61 seconds equals 0 hours, 1 minute, and 1 second).

// b) What is the value assigned to num when pad is called for the first time?
// =============> When you call formatTimeDisplay(61):
//	totalHours = Math.floor(totalMinutes / 60)
//	Since totalMinutes = 1, totalHours = 0.

// c) What is the return value of pad is called for the first time?
// =============> The return value of pad when it is called with num = 0 is "00". This is because the function converts the number to a string and pads it to ensure it has two digits

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The last call to pad will pass 1 as the value of num, because remainingSeconds is 1 when formatTimeDisplay(61) is executed.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============>  The return value of pad in its last call (with num = 1) is "01". The number 1 is padded to ensure it has two digits.
