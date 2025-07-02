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
// =============> pad is called 3 times — once each for hours, for minutes andvfor seconds.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The first call is for totalHours, and when you call formatTimeDisplay(61), the value of totalHours is:
//totalHours = (61 - 1) / 60 = 60 / 60 = 1, remainingMinutes = 1
//totalHours = totalMinutes - remainingMinutes = 1 - 1 = 0
// So, num = 0 for the first pad call.

// c) What is the return value of pad is called for the first time?
// =============> The return value is "00" because pad(0) results in "00" using .padStart(2, "0").

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The last call is for remaining seconds. With input 61, remainingSeconds = 61 % 60 = 1, so num = 1 in the last call.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is "01" – pad(1) returns "01" because it adds a leading zero to make it 2 characters.

// so final output should be "00:01:01"


