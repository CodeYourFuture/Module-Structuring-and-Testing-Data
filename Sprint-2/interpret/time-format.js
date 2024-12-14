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

// a) When formatTimeDisplay is called how many times will pad be called?
// pad is called 3 times in the template literal - once for totalHours, once for remainingMinutes, and once for remainingSeconds

// For input of 61:

// b) What is the value assigned to num when pad is called for the first time?
// The first pad call is for totalHours which is 0
// When seconds = 61:
// remainingSeconds = 1 (61 % 60)
// totalMinutes = 1 ((61 - 1) / 60)
// remainingMinutes = 1 (1 % 60) 
// totalHours = 0 ((1 - 1) / 60)

// c) What is the return value of pad when called for the first time?
// "00" - pad takes 0 and returns "00" by padding with leading zeros to 2 digits

// d) What is the value assigned to num when pad is called for the last time?
// The last pad call is for remainingSeconds which is 1
// This follows from the calculation above where remainingSeconds = 61 % 60 = 1

// e) What is the return value when pad is called for the last time?
// "01" - pad takes 1 and returns "01" by padding with leading zeros to 2 digits
